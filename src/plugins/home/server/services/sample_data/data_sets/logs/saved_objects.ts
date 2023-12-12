/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint max-len: 0 */
import { i18n } from '@osd/i18n';
import { SavedObject } from 'opensearch-dashboards/server';

export const getSavedObjects = (): SavedObject[] => [
  {
    id: 'e1d0f010-9ee7-11e7-8711-e7a007dcef99',
    type: 'visualization',
    updated_at: '2018-08-29T13:22:17.617Z',
    version: '1',
    migrationVersion: {},
    attributes: {
      title: i18n.translate('home.sampleData.logsSpec.uniqueVisitorsTitle', {
        defaultMessage: '[Logs] Unique Visitors vs. Average Bytes',
      }),
      visState:
        '{"title":"[Logs] Unique Visitors vs. Average Bytes","type":"area","params":{"type":"area","grid":{"categoryLines":false,"style":{"color":"#eee"}},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"truncate":100},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Avg. Bytes"}},{"id":"ValueAxis-2","name":"RightAxis-1","type":"value","position":"right","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Unique Visitors"}}],"seriesParams":[{"show":"true","type":"histogram","mode":"stacked","data":{"label":"Avg. Bytes","id":"1"},"drawLinesBetweenPoints":true,"showCircles":true,"interpolate":"linear","valueAxis":"ValueAxis-1"},{"show":true,"mode":"stacked","type":"line","drawLinesBetweenPoints":false,"showCircles":true,"interpolate":"linear","data":{"id":"2","label":"Unique Visitors"},"valueAxis":"ValueAxis-2"}],"addTooltip":true,"addLegend":true,"legendPosition":"right","times":[],"addTimeMarker":false,"radiusRatio":17},"aggs":[{"id":"1","enabled":true,"type":"avg","schema":"metric","params":{"field":"bytes","customLabel":"Avg. Bytes"}},{"id":"2","enabled":true,"type":"cardinality","schema":"metric","params":{"field":"clientip","customLabel":"Unique Visitors"}},{"id":"3","enabled":true,"type":"date_histogram","schema":"segment","params":{"field":"timestamp","interval":"auto","time_zone":"America/Los_Angeles","customInterval":"2h","min_doc_count":1,"extended_bounds":{}}},{"id":"4","enabled":true,"type":"count","schema":"radius","params":{}}]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"90943e30-9a47-11e8-b64d-95841ca0b247","filter":[],"query":{"query":"","language":"kuery"}}',
      },
    },
    references: [],
  },
  {
    id: '935afa20-e0cd-11e7-9d07-1398ccfcefa3',
    type: 'visualization',
    updated_at: '2018-08-29T13:22:17.617Z',
    version: '1',
    migrationVersion: {},
    attributes: {
      title: i18n.translate('home.sampleData.logsSpec.heatmapTitle', {
        defaultMessage: '[Logs] Heatmap',
      }),
      visState:
        '{"title":"[Logs] Heatmap","type":"heatmap","params":{"type":"heatmap","addTooltip":true,"addLegend":true,"enableHover":true,"legendPosition":"right","times":[],"colorsNumber":10,"colorSchema":"Reds","setColorRange":false,"colorsRange":[],"invertColors":false,"percentageMode":false,"valueAxes":[{"show":false,"id":"ValueAxis-1","type":"value","scale":{"type":"linear","defaultYExtents":false},"labels":{"show":false,"rotate":0,"color":"#555","overwriteColor":false}}]},"aggs":[{"id":"1","enabled":true,"type":"cardinality","schema":"metric","params":{"field":"clientip"}},{"id":"3","enabled":true,"type":"terms","schema":"group","params":{"field":"geo.src","size":5,"order":"desc","orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Country Source"}},{"id":"2","enabled":true,"type":"terms","schema":"segment","params":{"field":"hour_of_day","size":25,"order":"asc","orderBy":"_key","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Hour of Day"}}]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"90943e30-9a47-11e8-b64d-95841ca0b247","filter":[],"query":{"query":"","language":"kuery"}}',
      },
    },
    references: [],
  },
  {
    id: '69a34b00-9ee8-11e7-8711-e7a007dcef99',
    type: 'visualization',
    updated_at: '2018-08-29T13:24:46.136Z',
    version: '2',
    migrationVersion: {},
    attributes: {
      title: i18n.translate('home.sampleData.logsSpec.goalsTitle', {
        defaultMessage: '[Logs] Goals',
      }),
      visState:
        '{"title":"[Logs] Goals","type":"gauge","params":{"type":"gauge","addTooltip":true,"addLegend":false,"gauge":{"verticalSplit":false,"extendRange":true,"percentageMode":false,"gaugeType":"Arc","gaugeStyle":"Full","backStyle":"Full","orientation":"vertical","colorSchema":"Green to Red","gaugeColorMode":"Labels","colorsRange":[{"from":0,"to":500},{"from":500,"to":1000},{"from":1000,"to":1500}],"invertColors":true,"labels":{"show":false,"color":"black"},"scale":{"show":true,"labels":false,"color":"#333"},"type":"meter","style":{"bgWidth":0.9,"width":0.9,"mask":false,"bgMask":false,"maskBars":50,"bgFill":"#eee","bgColor":false,"subText":"visitors","fontSize":60,"labelColor":true}},"isDisplayWarning":false},"aggs":[{"id":"1","enabled":true,"type":"cardinality","schema":"metric","params":{"field":"clientip","customLabel":"Unique Visitors"}}]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"90943e30-9a47-11e8-b64d-95841ca0b247","filter":[],"query":{"query":"","language":"kuery"}}',
      },
    },
    references: [],
  },
  {
    id: '24a3e970-4257-11e8-b3aa-73fdaf54bfc9',
    type: 'visualization',
    updated_at: '2018-08-29T13:22:17.617Z',
    version: '1',
    migrationVersion: {},
    attributes: {
      title: i18n.translate('home.sampleData.logsSpec.inputControlsTitle', {
        defaultMessage: '[Logs] Input Controls',
      }),
      visState:
        '{"title":"[Logs] Input Controls","type":"input_control_vis","params":{"controls":[{"id":"1523980210832","indexPattern":"90943e30-9a47-11e8-b64d-95841ca0b247","fieldName":"geo.src","label":"Source Country","type":"list","options":{"type":"terms","multiselect":true,"size":100,"order":"desc"},"parent":""},{"id":"1523980191978","indexPattern":"90943e30-9a47-11e8-b64d-95841ca0b247","fieldName":"machine.os.keyword","label":"OS","type":"list","options":{"type":"terms","multiselect":true,"size":100,"order":"desc"},"parent":"1523980210832"},{"id":"1523980232790","indexPattern":"90943e30-9a47-11e8-b64d-95841ca0b247","fieldName":"bytes","label":"Bytes","type":"range","options":{"decimalPlaces":0,"step":1024}}],"updateFiltersOnChange":true,"useTimeFilter":true,"pinFilters":false},"aggs":[]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
    },
    references: [],
  },
  {
    id: '14e2e710-4258-11e8-b3aa-73fdaf54bfc9',
    type: 'visualization',
    updated_at: '2018-08-29T13:22:17.617Z',
    version: '1',
    migrationVersion: {},
    attributes: {
      title: i18n.translate('home.sampleData.logsSpec.visitorOSTitle', {
        defaultMessage: '[Logs] Visitors by OS',
      }),
      visState:
        '{"title":"[Logs] Visitors by OS","type":"pie","params":{"type":"pie","addTooltip":true,"addLegend":true,"legendPosition":"right","isDonut":true,"labels":{"show":true,"values":true,"last_level":true,"truncate":100}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"segment","params":{"field":"machine.os.keyword","otherBucket":true,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","size":10,"order":"desc","orderBy":"1"}}]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"90943e30-9a47-11e8-b64d-95841ca0b247","filter":[],"query":{"query":"","language":"kuery"}}',
      },
    },
    references: [],
  },
  {
    id: '47f2c680-a6e3-11e8-94b4-c30c0228351b',
    type: 'visualization',
    updated_at: '2018-08-29T13:22:17.617Z',
    version: '1',
    migrationVersion: {},
    attributes: {
      title: i18n.translate('home.sampleData.logsSpec.markdownInstructionsTitle', {
        defaultMessage: '[Logs] Markdown Instructions',
      }),
      visState:
        '{"title":"[Logs] Markdown Instructions","type":"markdown","params":{"fontSize":12,"openLinksInNewTab":true,"markdown":"### Sample Logs Data\\nThis dashboard contains sample data for you to play with. You can view it, search it, and interact with the visualizations. For more information about OpenSearch Dashboards, check our [docs](https://opensearch.org/docs/latest/dashboards/index/)."},"aggs":[]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
    },
    references: [],
  },
  {
    id: 'edf84fe0-e1a0-11e7-b6d5-4dc382ef7f5b',
    type: 'dashboard',
    updated_at: '2018-08-29T13:26:13.463Z',
    version: '3',
    references: [
      {
        name: 'panel_0',
        type: 'visualization',
        id: 'e1d0f010-9ee7-11e7-8711-e7a007dcef99',
      },
      {
        name: 'panel_2',
        type: 'visualization',
        id: '935afa20-e0cd-11e7-9d07-1398ccfcefa3',
      },
      {
        name: 'panel_4',
        type: 'visualization',
        id: '69a34b00-9ee8-11e7-8711-e7a007dcef99',
      },
      {
        name: 'panel_8',
        type: 'visualization',
        id: '24a3e970-4257-11e8-b3aa-73fdaf54bfc9',
      },
      {
        name: 'panel_9',
        type: 'visualization',
        id: '14e2e710-4258-11e8-b3aa-73fdaf54bfc9',
      },
      {
        name: 'panel_10',
        type: 'visualization',
        id: '47f2c680-a6e3-11e8-94b4-c30c0228351b',
      },
    ],
    migrationVersion: {
      dashboard: '7.0.0',
    },
    attributes: {
      title: i18n.translate('home.sampleData.logsSpec.webTrafficTitle', {
        defaultMessage: '[Logs] Web Traffic',
      }),
      hits: 0,
      description: i18n.translate('home.sampleData.logsSpec.webTrafficDescription', {
        defaultMessage: "Analyze mock web traffic log data for OpenSearch's website",
      }),
      panelsJSON:
        '[{"embeddableConfig":{"vis":{"legendOpen":false}},"gridData":{"x":0,"y":24,"w":48,"h":13,"i":"2"},"panelIndex":"2","version":"7.0.0-alpha1","panelRefName":"panel_0"},{"embeddableConfig":{"vis":{"legendOpen":false}},"gridData":{"x":0,"y":11,"w":48,"h":13,"i":"7"},"panelIndex":"7","version":"6.3.0","panelRefName":"panel_2"},{"embeddableConfig":{"vis":{"legendOpen":false}},"gridData":{"x":10,"y":0,"w":9,"h":11,"i":"11"},"panelIndex":"11","title":"","version":"6.3.0","panelRefName":"panel_4"},{"gridData":{"x":19,"y":0,"w":15,"h":11,"i":"16"},"panelIndex":"16","title":"","version":"6.3.0","panelRefName":"panel_8"},{"embeddableConfig":{"vis":{"legendOpen":false}},"gridData":{"x":34,"y":0,"w":14,"h":11,"i":"17"},"panelIndex":"17","version":"6.3.0","panelRefName":"panel_9"},{"embeddableConfig":{},"gridData":{"x":0,"y":0,"w":10,"h":11,"i":"18"},"panelIndex":"18","title":"","version":"7.0.0-alpha1","panelRefName":"panel_10"}]',
      optionsJSON: '{"hidePanelTitles":false,"useMargins":true}',
      version: 1,
      timeRestore: true,
      timeTo: 'now',
      timeFrom: 'now-7d',
      refreshInterval: {
        pause: false,
        value: 900000,
      },
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"language":"kuery","query":""},"filter":[],"highlightAll":true,"version":true}',
      },
    },
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Line Charts Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Line Charts Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Line Charts"}}',
    },
    id: 'ce24dd10-eb8a-11ed-8e00-17d7d50cd7b2',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzE0LDFd',
  },
  {
    attributes: {
      fieldFormatMap: '{"hour_of_day":{}}',
      fields:
        '[{"name":"@timestamp","type":"date","esTypes":["date"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"_id","type":"string","esTypes":["_id"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":false},{"name":"_index","type":"string","esTypes":["_index"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":false},{"name":"_score","type":"number","count":0,"scripted":false,"searchable":false,"aggregatable":false,"readFromDocValues":false},{"name":"_source","type":"_source","esTypes":["_source"],"count":0,"scripted":false,"searchable":false,"aggregatable":false,"readFromDocValues":false},{"name":"_type","type":"string","esTypes":["_type"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":false},{"name":"agent","type":"string","esTypes":["text"],"count":0,"scripted":false,"searchable":true,"aggregatable":false,"readFromDocValues":false},{"name":"agent.keyword","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true,"subType":{"multi":{"parent":"agent"}}},{"name":"bytes","type":"number","esTypes":["long"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"clientip","type":"ip","esTypes":["ip"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"event.dataset","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"extension","type":"string","esTypes":["text"],"count":0,"scripted":false,"searchable":true,"aggregatable":false,"readFromDocValues":false},{"name":"extension.keyword","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true,"subType":{"multi":{"parent":"extension"}}},{"name":"geo.coordinates","type":"geo_point","esTypes":["geo_point"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"geo.dest","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"geo.src","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"geo.srcdest","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"host","type":"string","esTypes":["text"],"count":0,"scripted":false,"searchable":true,"aggregatable":false,"readFromDocValues":false},{"name":"host.keyword","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true,"subType":{"multi":{"parent":"host"}}},{"name":"index","type":"string","esTypes":["text"],"count":0,"scripted":false,"searchable":true,"aggregatable":false,"readFromDocValues":false},{"name":"index.keyword","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true,"subType":{"multi":{"parent":"index"}}},{"name":"ip","type":"ip","esTypes":["ip"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"machine.os","type":"string","esTypes":["text"],"count":0,"scripted":false,"searchable":true,"aggregatable":false,"readFromDocValues":false},{"name":"machine.os.keyword","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true,"subType":{"multi":{"parent":"machine.os"}}},{"name":"machine.ram","type":"number","esTypes":["long"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"memory","type":"number","esTypes":["double"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"message","type":"string","esTypes":["text"],"count":0,"scripted":false,"searchable":true,"aggregatable":false,"readFromDocValues":false},{"name":"message.keyword","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true,"subType":{"multi":{"parent":"message"}}},{"name":"phpmemory","type":"number","esTypes":["long"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"referer","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"request","type":"string","esTypes":["text"],"count":0,"scripted":false,"searchable":true,"aggregatable":false,"readFromDocValues":false},{"name":"request.keyword","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true,"subType":{"multi":{"parent":"request"}}},{"name":"response","type":"string","esTypes":["text"],"count":0,"scripted":false,"searchable":true,"aggregatable":false,"readFromDocValues":false},{"name":"response.keyword","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true,"subType":{"multi":{"parent":"response"}}},{"name":"tags","type":"string","esTypes":["text"],"count":0,"scripted":false,"searchable":true,"aggregatable":false,"readFromDocValues":false},{"name":"tags.keyword","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true,"subType":{"multi":{"parent":"tags"}}},{"name":"timestamp","type":"date","esTypes":["date"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"url","type":"string","esTypes":["text"],"count":0,"scripted":false,"searchable":true,"aggregatable":false,"readFromDocValues":false},{"name":"url.keyword","type":"string","esTypes":["keyword"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true,"subType":{"multi":{"parent":"url"}}},{"name":"utc_time","type":"date","esTypes":["date"],"count":0,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"hour_of_day","type":"number","count":0,"scripted":true,"script":"doc[\'timestamp\'].value.getHour()","lang":"painless","searchable":true,"aggregatable":true,"readFromDocValues":false}]',
      timeFieldName: 'timestamp',
      title: 'opensearch_dashboards_sample_data_logs',
    },
    id: '90943e30-9a47-11e8-b64d-95841ca0b247',
    migrationVersion: { 'index-pattern': '7.6.0' },
    references: [],
    type: 'index-pattern',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzE1LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Line) Avg bytes over time',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Line) Avg bytes over time","type":"line","aggs":[{"id":"1","enabled":true,"type":"avg","params":{"field":"bytes"},"schema":"metric"},{"id":"2","enabled":true,"type":"date_histogram","params":{"field":"timestamp","timeRange":{"from":"now-7d","to":"now"},"useNormalizedOpenSearchInterval":true,"scaleMetricValues":false,"interval":"auto","drop_partials":false,"min_doc_count":1,"extended_bounds":{}},"schema":"segment"}],"params":{"type":"line","grid":{"categoryLines":false},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"filter":true,"truncate":100},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Average bytes"}}],"seriesParams":[{"show":true,"type":"line","mode":"normal","data":{"label":"Average bytes","id":"1"},"valueAxis":"ValueAxis-1","drawLinesBetweenPoints":true,"lineWidth":2,"interpolate":"linear","showCircles":true}],"addTooltip":true,"addLegend":true,"legendPosition":"right","times":[],"addTimeMarker":false,"labels":{},"thresholdLine":{"show":false,"value":10,"width":1,"style":"full","color":"#E7664C"}}}',
    },
    id: '39b5bd70-eb7b-11ed-8e00-17d7d50cd7b2',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzE2LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      styleState: '{"addTooltip":true,"addLegend":true,"legendPosition":"right","type":"line"}',
      title: '(VB) Avg bytes over time',
      uiState: '{}',
      version: 3,
      visualizationState:
        '{"searchField":"","activeVisualization":{"name":"line","aggConfigParams":[{"id":"1","enabled":true,"type":"date_histogram","params":{"field":"@timestamp","useNormalizedOpenSearchInterval":true,"scaleMetricValues":false,"interval":"auto","drop_partials":false,"min_doc_count":1,"extended_bounds":{}},"schema":"segment"},{"id":"2","enabled":true,"type":"avg","params":{"field":"bytes"},"schema":"metric"}]}}',
    },
    id: '64bb61a0-eb7b-11ed-8e00-17d7d50cd7b2',
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization-visbuilder',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzE3LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Area Charts Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Area Charts Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Area Charts"}}',
    },
    id: 'ed89dfc0-eb8f-11ed-8e00-17d7d50cd7b2',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzIxLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Area) Stacked extensions over time',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Area) Stacked extensions over time","type":"area","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"date_histogram","params":{"field":"timestamp","timeRange":{"from":"now-7d","to":"now"},"useNormalizedOpenSearchInterval":true,"scaleMetricValues":false,"interval":"auto","drop_partials":false,"min_doc_count":1,"extended_bounds":{}},"schema":"segment"},{"id":"3","enabled":true,"type":"terms","params":{"field":"extension.keyword","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"group"}],"params":{"type":"area","grid":{"categoryLines":false},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"filter":true,"truncate":100},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":true,"type":"area","mode":"stacked","data":{"label":"Count","id":"1"},"drawLinesBetweenPoints":true,"lineWidth":2,"showCircles":true,"interpolate":"linear","valueAxis":"ValueAxis-1"}],"addTooltip":true,"addLegend":true,"legendPosition":"right","times":[],"addTimeMarker":false,"thresholdLine":{"show":false,"value":10,"width":1,"style":"full","color":"#E7664C"},"labels":{}}}',
    },
    id: 'c0ba29f0-eb8f-11ed-8e00-17d7d50cd7b2',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzIyLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      styleState: '{"addTooltip":true,"addLegend":true,"legendPosition":"right","type":"area"}',
      title: '(VisBuilder) Extensions over time',
      uiState: '{}',
      version: 3,
      visualizationState:
        '{"searchField":"","activeVisualization":{"name":"area","aggConfigParams":[{"id":"4","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"5","enabled":true,"type":"date_histogram","params":{"field":"timestamp","useNormalizedOpenSearchInterval":true,"scaleMetricValues":false,"interval":"auto","drop_partials":false,"min_doc_count":1,"extended_bounds":{}},"schema":"segment"},{"id":"6","enabled":true,"type":"terms","params":{"field":"extension.keyword","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"group"}]}}',
    },
    id: '68fe55f0-eb90-11ed-8e00-17d7d50cd7b2',
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization-visbuilder',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzIzLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Bar Charts (Vertical) Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Bar Charts (Vertical) Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Bar Charts (Vertical)"}}',
    },
    id: '5e34ac20-eb98-11ed-8e00-17d7d50cd7b2',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzI3LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Vertical Bar) Stacked responses over time',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Vertical Bar) Stacked responses over time","type":"histogram","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"date_histogram","params":{"field":"timestamp","timeRange":{"from":"now-7d","to":"now"},"useNormalizedOpenSearchInterval":true,"scaleMetricValues":false,"interval":"auto","drop_partials":false,"min_doc_count":1,"extended_bounds":{}},"schema":"segment"},{"id":"3","enabled":true,"type":"terms","params":{"field":"response.keyword","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"group"}],"params":{"type":"histogram","grid":{"categoryLines":false},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"filter":true,"truncate":100},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":true,"type":"histogram","mode":"stacked","data":{"label":"Count","id":"1"},"valueAxis":"ValueAxis-1","drawLinesBetweenPoints":true,"lineWidth":2,"showCircles":true}],"addTooltip":true,"addLegend":true,"legendPosition":"right","times":[],"addTimeMarker":false,"labels":{"show":false},"thresholdLine":{"show":false,"value":10,"width":1,"style":"full","color":"#E7664C"}}}',
    },
    id: '23a5de70-eb99-11ed-8e00-17d7d50cd7b2',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzI4LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      styleState:
        '{"addTooltip":true,"addLegend":true,"legendPosition":"right","type":"histogram"}',
      title: '(VisBuilder) Responses over time',
      uiState: '{}',
      version: 3,
      visualizationState:
        '{"searchField":"","activeVisualization":{"name":"histogram","aggConfigParams":[{"id":"4","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"5","enabled":true,"type":"date_histogram","params":{"field":"timestamp","timeRange":{"from":"now-7d","to":"now"},"useNormalizedOpenSearchInterval":true,"scaleMetricValues":false,"interval":"auto","drop_partials":false,"min_doc_count":1,"extended_bounds":{}},"schema":"segment"},{"id":"6","enabled":true,"type":"terms","params":{"field":"response.keyword","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"group"}]}}',
    },
    id: '571745a0-eb99-11ed-8e00-17d7d50cd7b2',
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization-visbuilder',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzI5LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Bar Charts (Horizontal) Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Bar Charts (Horizontal) Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Bar Charts (Horizontal)"}}',
    },
    id: 'fd3b0750-227b-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzMzLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Horizontal Bar) Top destination count',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Horizontal Bar) Top destination count","type":"horizontal_bar","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"geo.dest","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"segment"}],"params":{"type":"histogram","grid":{"categoryLines":false},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"left","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"rotate":0,"filter":false,"truncate":200},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"bottom","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":75,"filter":true,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":true,"type":"histogram","mode":"normal","data":{"label":"Count","id":"1"},"valueAxis":"ValueAxis-1","drawLinesBetweenPoints":true,"lineWidth":2,"showCircles":true}],"addTooltip":true,"addLegend":true,"legendPosition":"right","times":[],"addTimeMarker":false,"labels":{},"thresholdLine":{"show":false,"value":10,"width":1,"style":"full","color":"#E7664C"}}}',
    },
    id: '08741f50-2275-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzM0LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      styleState:
        '{"addTooltip":true,"addLegend":true,"legendPosition":"right","type":"histogram"}',
      title: '(VisBuilder) Top destination count',
      uiState: '{}',
      version: 3,
      visualizationState:
        '{"searchField":"","activeVisualization":{"name":"histogram","aggConfigParams":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"geo.dest","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"segment"}]}}',
    },
    id: 'ca3ae740-2275-11ee-b88b-47a93b5c527c',
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization-visbuilder',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzM1LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Heatmaps Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Heatmaps Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Heatmaps"}}',
    },
    id: '1507e780-227d-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzM4LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Heatmap) Source vs OS',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Heatmap) Source vs OS","type":"heatmap","aggs":[{"id":"1","enabled":true,"type":"sum","params":{"field":"memory"},"schema":"metric"},{"id":"3","enabled":true,"type":"terms","params":{"field":"geo.src","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"group"},{"id":"2","enabled":true,"type":"terms","params":{"field":"machine.os.keyword","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"segment"}],"params":{"type":"heatmap","addTooltip":true,"addLegend":true,"enableHover":false,"legendPosition":"right","times":[],"colorsNumber":4,"colorSchema":"Greens","setColorRange":false,"colorsRange":[],"invertColors":false,"percentageMode":false,"valueAxes":[{"show":false,"id":"ValueAxis-1","type":"value","scale":{"type":"linear","defaultYExtents":false},"labels":{"show":false,"rotate":0,"overwriteColor":false,"color":"black"}}]}}',
    },
    id: '3d034700-227f-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzM5LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Tables Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Tables Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Tables"}}',
    },
    id: '6aed7840-22a5-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzQxLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Table) Bytes by request stats summary',
      uiStateJSON: '{"vis":{"sortColumn":{"colIndex":0,"direction":"asc"}}}',
      version: 1,
      visState:
        '{"title":"(Table) Bytes by request stats summary","type":"table","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"3","enabled":true,"type":"median","params":{"field":"bytes","percents":[50]},"schema":"metric"},{"id":"2","enabled":true,"type":"min","params":{"field":"bytes"},"schema":"metric"},{"id":"4","enabled":true,"type":"max","params":{"field":"bytes"},"schema":"metric"},{"id":"5","enabled":true,"type":"terms","params":{"field":"request.keyword","orderBy":"1","order":"desc","size":20,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"bucket"}],"params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"showTotal":false,"totalFunc":"sum","percentageCol":""}}',
    },
    id: 'f8df8de0-22a6-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzQyLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      styleState: '{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false}',
      title: '(VisBuilder) Bytes by request stats summary',
      uiState: '{}',
      version: 3,
      visualizationState:
        '{"searchField":"","activeVisualization":{"name":"table","aggConfigParams":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"median","params":{"field":"bytes","percents":[50]},"schema":"metric"},{"id":"3","enabled":true,"type":"terms","params":{"field":"request.keyword","orderBy":"1","order":"desc","size":20,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"bucket"},{"id":"4","enabled":true,"type":"min","params":{"field":"bytes"},"schema":"metric"},{"id":"5","enabled":true,"type":"max","params":{"field":"bytes"},"schema":"metric"}]}}',
    },
    id: 'a7d21570-22a7-11ee-b88b-47a93b5c527c',
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization-visbuilder',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzQzLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Metrics Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Metrics Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Metrics"}}',
    },
    id: 'b24e65c0-22a3-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzQ2LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Metric) Unique visitors',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Metric) Unique visitors","type":"metric","aggs":[{"id":"1","enabled":true,"type":"cardinality","params":{"field":"clientip"},"schema":"metric"}],"params":{"addTooltip":true,"addLegend":false,"type":"metric","metric":{"percentageMode":false,"useRanges":false,"colorSchema":"Green to Red","metricColorMode":"None","colorsRange":[{"from":0,"to":10000}],"labels":{"show":true},"invertColors":false,"style":{"bgFill":"#000","bgColor":false,"labelColor":false,"subText":"","fontSize":60}}}}',
    },
    id: '104396f0-22a4-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzQ3LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      styleState:
        '{"addTooltip":true,"addLegend":false,"type":"metric","metric":{"percentageMode":false,"useRanges":false,"colorSchema":"Green to Red","metricColorMode":"None","colorsRange":[{"from":0,"to":10000}],"labels":{"show":true},"invertColors":false,"style":{"bgFill":"#000","bgColor":false,"labelColor":false,"subText":"","fontSize":60}}}',
      title: '(VisBuilder) Unique visitors',
      uiState: '{}',
      version: 3,
      visualizationState:
        '{"searchField":"","activeVisualization":{"name":"metric","aggConfigParams":[{"id":"1","enabled":true,"type":"cardinality","params":{"field":"clientip"},"schema":"metric"}]}}',
    },
    id: '42ddb0f0-22a4-11ee-b88b-47a93b5c527c',
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization-visbuilder',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzQ4LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Pie Charts Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Pie Charts Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Pie Charts"}}',
    },
    id: '8add5d90-2a44-11ee-92de-ad1b6a4928e5',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzUxLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Pie) Visitors by OS',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Pie) Visitors by OS","type":"pie","aggs":[{"id":"1","enabled":true,"type":"cardinality","params":{"field":"clientip"},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"machine.os.keyword","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"segment"}],"params":{"type":"pie","addTooltip":true,"addLegend":true,"legendPosition":"right","isDonut":true,"labels":{"show":false,"values":true,"last_level":true,"truncate":100}}}',
    },
    id: '7fd12620-2a44-11ee-92de-ad1b6a4928e5',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzUyLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Radial Charts Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Radial Charts Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Radial Charts"}}',
    },
    id: '6154a6c0-2280-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzU0LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Gauge) Average bytes by extension',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Gauge) Average bytes by extension","type":"gauge","aggs":[{"id":"1","enabled":true,"type":"avg","params":{"field":"bytes"},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"extension.keyword","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"group"}],"params":{"type":"gauge","addTooltip":true,"addLegend":true,"isDisplayWarning":false,"gauge":{"alignment":"automatic","extendRange":true,"percentageMode":false,"gaugeType":"Arc","gaugeStyle":"Full","backStyle":"Full","orientation":"vertical","colorSchema":"Green to Red","gaugeColorMode":"Labels","colorsRange":[{"from":0,"to":6000},{"from":6000,"to":6500},{"from":6500,"to":7000}],"invertColors":false,"labels":{"show":true,"color":"black"},"scale":{"show":true,"labels":false,"color":"rgba(105,112,125,0.2)"},"type":"meter","style":{"bgWidth":0.9,"width":0.9,"mask":false,"bgMask":false,"maskBars":50,"bgFill":"rgba(105,112,125,0.2)","bgColor":true,"subText":"","fontSize":60}}}}',
    },
    id: 'f772de50-2281-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzU1LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Goal) Average machine RAM',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Goal) Average machine RAM","type":"goal","aggs":[{"id":"1","enabled":true,"type":"avg","params":{"field":"machine.ram"},"schema":"metric"}],"params":{"addTooltip":true,"addLegend":false,"isDisplayWarning":false,"type":"gauge","gauge":{"verticalSplit":false,"autoExtend":false,"percentageMode":true,"gaugeType":"Arc","gaugeStyle":"Full","backStyle":"Full","orientation":"vertical","useRanges":false,"colorSchema":"Green to Red","gaugeColorMode":"None","colorsRange":[{"from":0,"to":10000000000},{"from":10000000000,"to":20000000000}],"invertColors":false,"labels":{"show":true,"color":"black"},"scale":{"show":false,"labels":false,"color":"rgba(105,112,125,0.2)","width":2},"type":"meter","style":{"bgFill":"rgba(105,112,125,0.2)","bgColor":false,"labelColor":false,"subText":"","fontSize":60}}}}',
    },
    id: '9b0ae760-2282-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzU4LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Maps Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Maps Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Maps"}}',
    },
    id: '93cc8830-227f-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzYwLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Coordinate Map) Geohash coordinates',
      uiStateJSON: '{"mapZoom":3,"mapCenter":[35.0659731379842,-107.80640422373408]}',
      version: 1,
      visState:
        '{"title":"(Coordinate Map) Geohash coordinates","type":"tile_map","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"geohash_grid","params":{"field":"geo.coordinates","autoPrecision":true,"precision":2,"useGeocentroid":true,"isFilteredByCollar":true},"schema":"segment"}],"params":{"colorSchema":"Yellow to Red","mapType":"Scaled Circle Markers","isDesaturated":true,"addTooltip":true,"heatClusterSize":1.5,"legendPosition":"bottomright","mapZoom":2,"mapCenter":[0,0],"wms":{"enabled":false,"url":"","options":{"version":"","layers":"","format":"image/png","transparent":true,"attribution":"","styles":""},"selectedTmsLayer":{"origin":"elastic_maps_service","id":"road_map","minZoom":0,"maxZoom":14,"attribution":"<a rel=\\"noreferrer noopener\\" href=\\"https://www.openstreetmap.org/copyright\\">Map data © OpenStreetMap contributors</a>"}}}}',
    },
    id: 'fe07f770-227f-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzYxLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Region Map) Destination count',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Region Map) Destination count","type":"region_map","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"geo.dest","orderBy":"1","order":"desc","size":50,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"segment"}],"params":{"addTooltip":true,"colorSchema":"Yellow to Red","emsHotLink":"?locale=en#file/world_countries","isDisplayWarning":true,"layerChosenByUser":"default","legendPosition":"bottomright","mapCenter":[0,0],"mapZoom":2,"outlineWeight":1,"selectedCustomJoinField":null,"selectedJoinField":{"description":"ISO 3166-1 alpha-2 Code","name":"iso2","type":"id"},"selectedLayer":{"attribution":"<a rel=\\"noreferrer noopener\\" href=\\"http://www.naturalearthdata.com/about/terms-of-use\\">Made with NaturalEarth</a>","created_at":"2017-04-26T17:12:15.978370","fields":[{"description":"ISO 3166-1 alpha-2 Code","name":"iso2","type":"id"},{"description":"ISO 3166-1 alpha-3 Code","name":"iso3","type":"id"},{"description":"Name","name":"name","type":"name"}],"format":{"type":"geojson"},"id":"world_countries","isEMS":true,"layerId":"elastic_maps_service.World Countries","name":"World Countries","origin":"elastic_maps_service"},"showAllShapes":true,"wms":{"enabled":false,"options":{"attribution":"","format":"image/png","layers":"","styles":"","transparent":true,"version":""},"selectedTmsLayer":{"attribution":"<a rel=\\"noreferrer noopener\\" href=\\"https://www.openstreetmap.org/copyright\\">Map data © OpenStreetMap contributors</a>","id":"road_map","maxZoom":14,"minZoom":0,"origin":"elastic_maps_service"},"url":""}}}',
    },
    id: 'eb268650-2a43-11ee-92de-ad1b6a4928e5',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzYyLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Text Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Text Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Text"}}',
    },
    id: '45146a10-2283-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzYzLDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: '(Markdown) Sample static markdown',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Markdown) Sample static markdown","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# A first-level heading\\n\\n- **This is bold text**\\n- _This text is italicized_\\n- ~~This was mistaken text~~\\n- **This text is _extremely_ important**\\n- ***All this text is important***\\n\\nText that is not a quote\\n\\n> Text that is a quote\\n\\n## A second-level heading\\n\\nUse `git status` to list all new or modified files that haven\'t yet been committed.\\n\\nSome basic Git commands are:\\n```\\ngit status\\ngit add\\ngit commit\\n```\\n\\n### A third-level heading\\n\\nTest out the [OpenSearch Dashboards Playground](https://playground.opensearch.org).\\n\\nNavigate to [home](/).\\n\\n![Screenshot of sample data UI in OpenSearch Dashboards](https://opensearch.org/docs/latest/images/dashboards/add-sample-data.png)\\n\\n- list item\\n- list item\\n- list item\\n\\n1. list item\\n2. list item\\n3. list item"}}',
    },
    id: '23250ed0-2285-11ee-b88b-47a93b5c527c',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzY0LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"query":"","language":"kuery"},"filter":[]}',
      },
      title: 'Tag Cloud Header',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"Tag Cloud Header","type":"markdown","aggs":[],"params":{"fontSize":12,"openLinksInNewTab":false,"markdown":"# Tag Cloud"}}',
    },
    id: 'a58f3540-2a45-11ee-92de-ad1b6a4928e5',
    migrationVersion: { visualization: '7.10.0' },
    references: [],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzY2LDFd',
  },
  {
    attributes: {
      description: '',
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"query":{"query":"","language":"kuery"},"filter":[],"indexRefName":"kibanaSavedObjectMeta.searchSourceJSON.index"}',
      },
      title: '(Tag Cloud) Requests',
      uiStateJSON: '{}',
      version: 1,
      visState:
        '{"title":"(Tag Cloud) Requests","type":"tagcloud","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"request.keyword","orderBy":"1","order":"desc","size":15,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"},"schema":"segment"}],"params":{"scale":"linear","orientation":"single","minFontSize":18,"maxFontSize":72,"showLabel":true}}',
    },
    id: '81017350-2a45-11ee-92de-ad1b6a4928e5',
    migrationVersion: { visualization: '7.10.0' },
    references: [
      {
        id: '90943e30-9a47-11e8-b64d-95841ca0b247',
        name: 'kibanaSavedObjectMeta.searchSourceJSON.index',
        type: 'index-pattern',
      },
    ],
    type: 'visualization',
    updated_at: '2023-07-25T17:00:34.843Z',
    version: 'WzY3LDFd',
  },
  {
    attributes: {
      description: '',
      hits: 0,
      kibanaSavedObjectMeta: {
        searchSourceJSON: '{"query":{"language":"kuery","query":""},"filter":[]}',
      },
      optionsJSON: '{"hidePanelTitles":false,"useMargins":true}',
      panelsJSON:
        '[{"version":"3.0.0","gridData":{"x":0,"y":0,"w":48,"h":5,"i":"debc95ec-7d43-49ee-84c8-95ad7b0b03ea"},"panelIndex":"debc95ec-7d43-49ee-84c8-95ad7b0b03ea","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_0"},{"version":"3.0.0","gridData":{"x":0,"y":5,"w":16,"h":16,"i":"0c23bab6-f9a2-4bb6-b9d7-918b0879f18f"},"panelIndex":"0c23bab6-f9a2-4bb6-b9d7-918b0879f18f","embeddableConfig":{},"panelRefName":"panel_1"},{"version":"3.0.0","gridData":{"x":16,"y":5,"w":16,"h":16,"i":"5eb89f9b-4086-4508-b469-dc8a85aa9a1f"},"panelIndex":"5eb89f9b-4086-4508-b469-dc8a85aa9a1f","embeddableConfig":{"uiState":{}},"panelRefName":"panel_2"},{"version":"3.0.0","gridData":{"x":0,"y":37,"w":48,"h":5,"i":"eba90567-b720-43dc-9065-9097282c668e"},"panelIndex":"eba90567-b720-43dc-9065-9097282c668e","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_6"},{"version":"3.0.0","gridData":{"x":0,"y":42,"w":16,"h":16,"i":"f816a6c6-8fdd-405c-826e-58d0958d5f33"},"panelIndex":"f816a6c6-8fdd-405c-826e-58d0958d5f33","embeddableConfig":{"table":null,"vis":{"legendOpen":true}},"panelRefName":"panel_7"},{"version":"3.0.0","gridData":{"x":16,"y":42,"w":16,"h":16,"i":"f49be7f3-7913-4c24-b98a-cdd7e8e3f893"},"panelIndex":"f49be7f3-7913-4c24-b98a-cdd7e8e3f893","embeddableConfig":{"uiState":{}},"panelRefName":"panel_8"},{"version":"3.0.0","gridData":{"x":0,"y":74,"w":48,"h":5,"i":"06c8b217-3d11-431f-8591-b811046a6a16"},"panelIndex":"06c8b217-3d11-431f-8591-b811046a6a16","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_12"},{"version":"3.0.0","gridData":{"x":0,"y":79,"w":16,"h":16,"i":"ab20d005-854e-4bf6-91ff-aedf5fc2712a"},"panelIndex":"ab20d005-854e-4bf6-91ff-aedf5fc2712a","embeddableConfig":{},"panelRefName":"panel_13"},{"version":"3.0.0","gridData":{"x":16,"y":79,"w":16,"h":16,"i":"0ab357d5-9918-442e-8a27-a6e3d61abb98"},"panelIndex":"0ab357d5-9918-442e-8a27-a6e3d61abb98","embeddableConfig":{"uiState":{}},"panelRefName":"panel_14"},{"version":"3.0.0","gridData":{"x":0,"y":111,"w":48,"h":5,"i":"6594da6a-87bd-4242-94db-9f04f8d961bb"},"panelIndex":"6594da6a-87bd-4242-94db-9f04f8d961bb","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_18"},{"version":"3.0.0","gridData":{"x":0,"y":116,"w":16,"h":16,"i":"dca1fdd1-66ba-4dbb-94a9-033345da105d"},"panelIndex":"dca1fdd1-66ba-4dbb-94a9-033345da105d","embeddableConfig":{},"panelRefName":"panel_19"},{"version":"3.0.0","gridData":{"x":16,"y":116,"w":16,"h":16,"i":"98b7b7d9-0441-4f2a-a15b-d94f4eb3d61b"},"panelIndex":"98b7b7d9-0441-4f2a-a15b-d94f4eb3d61b","embeddableConfig":{"uiState":{}},"panelRefName":"panel_20"},{"version":"3.0.0","gridData":{"x":0,"y":148,"w":48,"h":5,"i":"6011b779-dc42-4e4c-b539-2c834057fb47"},"panelIndex":"6011b779-dc42-4e4c-b539-2c834057fb47","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_23"},{"version":"3.0.0","gridData":{"x":0,"y":153,"w":16,"h":16,"i":"d278b903-0f8e-4531-ba70-793f690d0b86"},"panelIndex":"d278b903-0f8e-4531-ba70-793f690d0b86","embeddableConfig":{"vis":null},"panelRefName":"panel_24"},{"version":"3.0.0","gridData":{"x":0,"y":169,"w":48,"h":5,"i":"f76c7138-975d-46d0-841d-b5adaa12db4b"},"panelIndex":"f76c7138-975d-46d0-841d-b5adaa12db4b","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_26"},{"version":"3.0.0","gridData":{"x":0,"y":174,"w":16,"h":16,"i":"3bab6531-5d55-45c6-ad95-8de643fd8726"},"panelIndex":"3bab6531-5d55-45c6-ad95-8de643fd8726","embeddableConfig":{"table":null,"vis":{"columnsWidth":[{"colIndex":0,"width":102.4}],"sortColumn":{"colIndex":0,"direction":"asc"}}},"panelRefName":"panel_27"},{"version":"3.0.0","gridData":{"x":16,"y":174,"w":16,"h":16,"i":"8d91d7c6-af0c-4dee-a5cc-657bdf5b1ad8"},"panelIndex":"8d91d7c6-af0c-4dee-a5cc-657bdf5b1ad8","embeddableConfig":{"uiState":{"vis":{"sortColumn":{"colIndex":0,"direction":"asc"}}}},"panelRefName":"panel_28"},{"version":"3.0.0","gridData":{"x":0,"y":206,"w":48,"h":5,"i":"fdfaa786-d74a-454e-b9f5-8031dc103055"},"panelIndex":"fdfaa786-d74a-454e-b9f5-8031dc103055","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_31"},{"version":"3.0.0","gridData":{"x":0,"y":211,"w":16,"h":16,"i":"9f0ef347-bcb1-4fd2-ab7e-7a1b2df9a8e4"},"panelIndex":"9f0ef347-bcb1-4fd2-ab7e-7a1b2df9a8e4","embeddableConfig":{},"panelRefName":"panel_32"},{"version":"3.0.0","gridData":{"x":16,"y":211,"w":16,"h":16,"i":"3a684545-ffdd-4f74-8f61-de8e09715f20"},"panelIndex":"3a684545-ffdd-4f74-8f61-de8e09715f20","embeddableConfig":{"uiState":{}},"panelRefName":"panel_33"},{"version":"3.0.0","gridData":{"x":0,"y":243,"w":48,"h":5,"i":"50fe3711-41a9-4b8b-8a5d-f2a450f7d0d3"},"panelIndex":"50fe3711-41a9-4b8b-8a5d-f2a450f7d0d3","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_36"},{"version":"3.0.0","gridData":{"x":0,"y":248,"w":16,"h":16,"i":"0273a589-6799-4144-9449-fdf186c13a9e"},"panelIndex":"0273a589-6799-4144-9449-fdf186c13a9e","embeddableConfig":{},"panelRefName":"panel_37"},{"version":"3.0.0","gridData":{"x":0,"y":264,"w":48,"h":5,"i":"2af2604a-f9d9-4070-b171-25a8f9544da7"},"panelIndex":"2af2604a-f9d9-4070-b171-25a8f9544da7","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_39"},{"version":"3.0.0","gridData":{"x":0,"y":269,"w":16,"h":16,"i":"b72c4b77-abbb-4ad2-a117-c71f6e6ae100"},"panelIndex":"b72c4b77-abbb-4ad2-a117-c71f6e6ae100","embeddableConfig":{"vis":null},"panelRefName":"panel_40"},{"version":"3.0.0","gridData":{"x":0,"y":285,"w":16,"h":16,"i":"95e6cb30-3829-44eb-a40d-4fc81378d079"},"panelIndex":"95e6cb30-3829-44eb-a40d-4fc81378d079","embeddableConfig":{"vis":null},"panelRefName":"panel_43"},{"version":"3.0.0","gridData":{"x":0,"y":301,"w":48,"h":5,"i":"789c9ec0-cf5e-4abf-9927-d93f138fc6c5"},"panelIndex":"789c9ec0-cf5e-4abf-9927-d93f138fc6c5","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_45"},{"version":"3.0.0","gridData":{"x":0,"y":306,"w":16,"h":16,"i":"9b6398c7-b998-4e7a-8f8b-1ecbf3a6b374"},"panelIndex":"9b6398c7-b998-4e7a-8f8b-1ecbf3a6b374","embeddableConfig":{"mapZoom":null,"mapCenter":null},"panelRefName":"panel_46"},{"version":"3.0.0","gridData":{"x":16,"y":306,"w":16,"h":16,"i":"e66cfa84-e9b8-410a-9841-42d889b67e68"},"panelIndex":"e66cfa84-e9b8-410a-9841-42d889b67e68","embeddableConfig":{"mapCenter":null,"mapZoom":null},"panelRefName":"panel_47"},{"version":"3.0.0","gridData":{"x":0,"y":322,"w":48,"h":5,"i":"fbd20e4e-6f57-4d0a-a39b-eec00ba78dc8"},"panelIndex":"fbd20e4e-6f57-4d0a-a39b-eec00ba78dc8","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_48"},{"version":"3.0.0","gridData":{"x":0,"y":327,"w":16,"h":16,"i":"61fd2efa-3e87-458e-8a68-e64efadfb1e2"},"panelIndex":"61fd2efa-3e87-458e-8a68-e64efadfb1e2","embeddableConfig":{},"panelRefName":"panel_49"},{"version":"3.0.0","gridData":{"x":0,"y":343,"w":48,"h":5,"i":"353acf6d-bef6-408f-8703-bfe46444117a"},"panelIndex":"353acf6d-bef6-408f-8703-bfe46444117a","embeddableConfig":{"hidePanelTitles":true},"panelRefName":"panel_51"},{"version":"3.0.0","gridData":{"x":0,"y":348,"w":16,"h":16,"i":"0a64ca2e-c83f-4402-b639-10e86695f535"},"panelIndex":"0a64ca2e-c83f-4402-b639-10e86695f535","embeddableConfig":{},"panelRefName":"panel_52"}]',
      refreshInterval: { pause: true, value: 0 },
      timeFrom: 'now-7d',
      timeRestore: true,
      timeTo: 'now',
      title: 'Visual Consistency Dashboard',
      version: 1,
    },
    id: 'c39012d0-eb7a-11ed-8e00-17d7d50cd7b2',
    migrationVersion: { dashboard: '7.9.3' },
    references: [
      { id: 'ce24dd10-eb8a-11ed-8e00-17d7d50cd7b2', name: 'panel_0', type: 'visualization' },
      { id: '39b5bd70-eb7b-11ed-8e00-17d7d50cd7b2', name: 'panel_1', type: 'visualization' },
      {
        id: '64bb61a0-eb7b-11ed-8e00-17d7d50cd7b2',
        name: 'panel_2',
        type: 'visualization-visbuilder',
      },
      { id: 'ed89dfc0-eb8f-11ed-8e00-17d7d50cd7b2', name: 'panel_6', type: 'visualization' },
      { id: 'c0ba29f0-eb8f-11ed-8e00-17d7d50cd7b2', name: 'panel_7', type: 'visualization' },
      {
        id: '68fe55f0-eb90-11ed-8e00-17d7d50cd7b2',
        name: 'panel_8',
        type: 'visualization-visbuilder',
      },
      { id: '5e34ac20-eb98-11ed-8e00-17d7d50cd7b2', name: 'panel_12', type: 'visualization' },
      { id: '23a5de70-eb99-11ed-8e00-17d7d50cd7b2', name: 'panel_13', type: 'visualization' },
      {
        id: '571745a0-eb99-11ed-8e00-17d7d50cd7b2',
        name: 'panel_14',
        type: 'visualization-visbuilder',
      },
      { id: 'fd3b0750-227b-11ee-b88b-47a93b5c527c', name: 'panel_18', type: 'visualization' },
      { id: '08741f50-2275-11ee-b88b-47a93b5c527c', name: 'panel_19', type: 'visualization' },
      {
        id: 'ca3ae740-2275-11ee-b88b-47a93b5c527c',
        name: 'panel_20',
        type: 'visualization-visbuilder',
      },
      { id: '1507e780-227d-11ee-b88b-47a93b5c527c', name: 'panel_23', type: 'visualization' },
      { id: '3d034700-227f-11ee-b88b-47a93b5c527c', name: 'panel_24', type: 'visualization' },
      { id: '6aed7840-22a5-11ee-b88b-47a93b5c527c', name: 'panel_26', type: 'visualization' },
      { id: 'f8df8de0-22a6-11ee-b88b-47a93b5c527c', name: 'panel_27', type: 'visualization' },
      {
        id: 'a7d21570-22a7-11ee-b88b-47a93b5c527c',
        name: 'panel_28',
        type: 'visualization-visbuilder',
      },
      { id: 'b24e65c0-22a3-11ee-b88b-47a93b5c527c', name: 'panel_31', type: 'visualization' },
      { id: '104396f0-22a4-11ee-b88b-47a93b5c527c', name: 'panel_32', type: 'visualization' },
      {
        id: '42ddb0f0-22a4-11ee-b88b-47a93b5c527c',
        name: 'panel_33',
        type: 'visualization-visbuilder',
      },
      { id: '8add5d90-2a44-11ee-92de-ad1b6a4928e5', name: 'panel_36', type: 'visualization' },
      { id: '7fd12620-2a44-11ee-92de-ad1b6a4928e5', name: 'panel_37', type: 'visualization' },
      { id: '6154a6c0-2280-11ee-b88b-47a93b5c527c', name: 'panel_39', type: 'visualization' },
      { id: 'f772de50-2281-11ee-b88b-47a93b5c527c', name: 'panel_40', type: 'visualization' },
      { id: '9b0ae760-2282-11ee-b88b-47a93b5c527c', name: 'panel_43', type: 'visualization' },
      { id: '93cc8830-227f-11ee-b88b-47a93b5c527c', name: 'panel_45', type: 'visualization' },
      { id: 'fe07f770-227f-11ee-b88b-47a93b5c527c', name: 'panel_46', type: 'visualization' },
      { id: 'eb268650-2a43-11ee-92de-ad1b6a4928e5', name: 'panel_47', type: 'visualization' },
      { id: '45146a10-2283-11ee-b88b-47a93b5c527c', name: 'panel_48', type: 'visualization' },
      { id: '23250ed0-2285-11ee-b88b-47a93b5c527c', name: 'panel_49', type: 'visualization' },
      { id: 'a58f3540-2a45-11ee-92de-ad1b6a4928e5', name: 'panel_51', type: 'visualization' },
      { id: '81017350-2a45-11ee-92de-ad1b6a4928e5', name: 'panel_52', type: 'visualization' },
    ],
    type: 'dashboard',
    updated_at: '2023-07-25T19:39:07.219Z',
    version: 'WzgwLDFd',
  },
];
