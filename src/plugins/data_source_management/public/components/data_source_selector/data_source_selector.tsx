/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { i18n } from '@osd/i18n';
import { EuiComboBox, EuiBadge, EuiFlexItem, EuiFlexGroup } from '@elastic/eui';
import { SavedObjectsClientContract, ToastsStart, SavedObject } from 'opensearch-dashboards/public';
import { IUiSettingsClient } from 'src/core/public';
import { getDataSourcesWithFields, getDefaultDataSource, getFilteredDataSources } from '../utils';
import { DataSourceAttributes } from '../../types';

export const LocalCluster: DataSourceOption = {
  label: i18n.translate('dataSource.localCluster', {
    defaultMessage: 'Local cluster',
  }),
  id: '',
};

export interface DataSourceSelectorProps {
  savedObjectsClient: SavedObjectsClientContract;
  notifications: ToastsStart;
  onSelectedDataSource: (dataSourceOption: DataSourceOption[]) => void;
  disabled: boolean;
  fullWidth: boolean;
  hideLocalCluster?: boolean;
  defaultOption?: DataSourceOption[];
  placeholderText?: string;
  removePrepend?: boolean;
  dataSourceFilter?: (dataSource: SavedObject<DataSourceAttributes>) => boolean;
  compressed?: boolean;
  uiSettings?: IUiSettingsClient;
}

interface DataSourceSelectorState {
  selectedOption: DataSourceOption[];
  allDataSources: Array<SavedObject<DataSourceAttributes>>;
  defaultDataSource: string | null;
  dataSourceOptions?: DataSourceOption[];
}

export interface DataSourceOption {
  label: string;
  id: string;
  checked?: string;
}

export class DataSourceSelector extends React.Component<
  DataSourceSelectorProps,
  DataSourceSelectorState
> {
  private _isMounted: boolean = false;

  constructor(props: DataSourceSelectorProps) {
    super(props);

    this.state = {
      allDataSources: [],
      defaultDataSource: '',
      selectedOption: this.props.hideLocalCluster ? [] : [LocalCluster],
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSelectedOption(
    dataSourceOptions: DataSourceOption[],
    allDataSources: Array<SavedObject<DataSourceAttributes>>,
    defaultDataSource: string | null
  ) {
    const [{ id }] = this.props.defaultOption!;
    const dataSource = dataSourceOptions.find((ds) => ds.id === id);
    const selectedOption = dataSource ? [{ id, label: dataSource.label }] : [];

    // Invalid/filtered out datasource
    if (!dataSource) {
      this.props.notifications.addWarning(
        i18n.translate('dataSource.fetchDataSourceError', {
          defaultMessage: 'Data source with id is not available',
        })
      );
    }

    this.setState({
      ...this.state,
      dataSourceOptions,
      selectedOption,
      defaultDataSource,
      allDataSources,
    });
    this.props.onSelectedDataSource(selectedOption);
  }

  handleDefaultDataSource(
    dataSourceOptions: DataSourceOption[],
    allDataSources: Array<SavedObject<DataSourceAttributes>>,
    defaultDataSource: string | null
  ) {
    const selectedDataSource = getDefaultDataSource(
      dataSourceOptions,
      LocalCluster,
      defaultDataSource,
      this.props.hideLocalCluster
    );

    // No active option, did not find valid option
    if (selectedDataSource.length === 0) {
      this.props.notifications.addWarning('No connected data source available.');
      this.props.onSelectedDataSource([]);
      return;
    }

    this.setState({
      ...this.state,
      dataSourceOptions,
      selectedOption: selectedDataSource,
      defaultDataSource,
      allDataSources,
    });
    this.props.onSelectedDataSource(selectedDataSource);
  }

  async componentDidMount() {
    this._isMounted = true;
    try {
      // 1. Fetch
      const fetchedDataSources = await getDataSourcesWithFields(this.props.savedObjectsClient, [
        'id',
        'title',
        'auth.type',
      ]);

      // 2. Process
      const dataSourceOptions = getFilteredDataSources(
        fetchedDataSources,
        this.props.dataSourceFilter
      );

      // 3. Add local cluster as option
      if (!this.props.hideLocalCluster) {
        dataSourceOptions.unshift(LocalCluster);
      }

      // 4. Error state if filter filters out everything
      if (!dataSourceOptions.length) {
        this.props.notifications.addWarning('No connected data source available.');
        this.props.onSelectedDataSource([]);
        return;
      }

      const defaultDataSource = this.props.uiSettings?.get('defaultDataSource', null) ?? null;
      // 5.1 Empty default option, [], just want to show placeholder
      if (this.props.defaultOption?.length === 0) {
        this.setState({
          ...this.state,
          dataSourceOptions,
          selectedOption: [],
          defaultDataSource,
          allDataSources: fetchedDataSources,
        });
        return;
      }

      // 5.2 Handle active option, [{}]
      if (this.props.defaultOption?.length) {
        this.handleSelectedOption(dataSourceOptions, fetchedDataSources, defaultDataSource);
        return;
      }

      // 5.3 Handle default data source
      this.handleDefaultDataSource(dataSourceOptions, fetchedDataSources, defaultDataSource);
    } catch (err) {
      this.props.notifications.addWarning(
        i18n.translate('dataSource.fetchDataSourceError', {
          defaultMessage: 'Unable to fetch existing data sources',
        })
      );
    }
  }

  onChange(e: DataSourceOption[]) {
    if (!this._isMounted) return;
    this.setState({
      selectedOption: e,
    });
    this.props.onSelectedDataSource(e);
  }

  render() {
    const placeholderText =
      this.props.placeholderText === undefined
        ? 'Select a data source'
        : this.props.placeholderText;

    // The filter condition can be changed, thus we filter again here to make sure each time we will get the filtered data sources before rendering
    const options = getFilteredDataSources(this.state.allDataSources, this.props.dataSourceFilter);

    if (!this.props.hideLocalCluster) {
      options.unshift(LocalCluster);
    }

    return (
      <EuiComboBox
        aria-label={
          placeholderText
            ? i18n.translate('dataSourceSelectorComboBoxAriaLabel', {
                defaultMessage: placeholderText,
              })
            : 'dataSourceSelectorCombobox'
        }
        placeholder={
          placeholderText
            ? i18n.translate('dataSourceSelectorComboBoxPlaceholder', {
                defaultMessage: placeholderText,
              })
            : ''
        }
        singleSelection={{ asPlainText: true }}
        options={options}
        selectedOptions={this.state.selectedOption}
        onChange={(e) => this.onChange(e)}
        prepend={
          this.props.removePrepend
            ? undefined
            : i18n.translate('dataSourceSelectorComboBoxPrepend', {
                defaultMessage: 'Data source',
              })
        }
        compressed={this.props.compressed || false}
        isDisabled={this.props.disabled}
        fullWidth={this.props.fullWidth || false}
        data-test-subj={'dataSourceSelectorComboBox'}
        renderOption={(option) => (
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem grow={1}>{option.label}</EuiFlexItem>
            {option.id === this.state.defaultDataSource && (
              <EuiFlexItem grow={false}>
                <EuiBadge iconSide="left">Default</EuiBadge>
              </EuiFlexItem>
            )}
          </EuiFlexGroup>
        )}
      />
    );
  }
}
