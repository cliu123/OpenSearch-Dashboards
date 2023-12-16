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
  }
];
