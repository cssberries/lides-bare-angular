import { Injectable, OnInit } from '@angular/core';
import results from './data/results.json';
import metrics from './data/tree/metrics.json';
import treeMetricsCollapsed from './data/tree/metrics-collapsed.json';
import treeMetricsCollapsedA from './data/tree/metrics-collapsed-a.json';
import treeMetricsExpanded from './data/tree/metrics-expanded.json';
import treeMetricsExpandedEmpty from './data/tree/metrics-expanded-empty.json';
import treeMetricsExpandedA from './data/tree/metrics-expanded-a.json';
import treeTransactionsMetrics from './data/tree/treeTransactionsMetrics.json';
import treeTransactionsPercentile from './data/tree/treeTransactionsPercentile.json';
import treeMetricsFiltered from './data/tree/treeMetricsFiltered.json';
import treeFilterEmulations from './data/tree/treeFilterEmulations.json';
import treeFilterMetrics from './data/tree/treeFilterMetrics.json';
import treeMetricsDefault from './data/tree/treeMetricsDefault.json';
import treeTransactions from './data/tree/treeTransactions.json';
import treeMetrics from './data/tree/treeMetrics.json';
import metricsExpandedTrSummary from './data/tree/metrics-expanded-tr-summary.json';
import treeTransactionsSummaryList from './data/tree/tree-transactions-summary-list.json';
import treeTags from './data/tree/tags.json';
import metricsTreeStructure_a from './data/tree/metricsTreeStructure_a.json';
import metricsWithLines from './data/tree/metrics-with-lines.json';
import gauges_general from './data/gauges-general.json';
import eventsBarGeneral from './data/events-bar-general.json';
import eventsBarMinimal from './data/events-bar-minimal.json';
import entityOplg from './data/entity-oplg.json';
import entityRendezvous from './data/entity-rendezvous.json';
import transactionsList from './data/transactionsList.json';
import vusersLegend from './data/vusersLegend.json';
import transactionsShortList from './data/transactionsShortList.json';
import generalTab from './data/generalTab.json';
import generalTab_2 from './data/generalTab_2.json';
import generalTab_3 from './data/generalTab_3.json';
import flowsMeta from './data/meta.json';
import loadTests from './data/load-tests.json';
import loadGenerators from './data/load-generators.json';
import whitelistedIp from './data/whitelisted-ip.json';
import chartVusers from './data/chart-vusers.json';
import chartCpu from './data/chart-cpu.json';
import chartErrorsMobile from './data/chart-errors-mobile.json';
import reportTemplates from './data/report-templates.json';
import templateItemsLibrary from './data/templateItemsLibrary.json';
import reportTemplatesByMe from './data/reportTemplatesByMe.json';
import messages from './data/messages.json';
import exportedList from './data/exportedList.json';
import legendMonitors from './data/legendMonitors.json';
import monitors from './data/monitors.json';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private dataList = [
        {
            name: 'monitors',
            data: monitors
        },
        {
            name: 'legendMonitors',
            data: legendMonitors
        },
        {
            name: 'exportedList',
            data: exportedList
        },
        {
            name: 'messages',
            data: messages
        },
        {
            name: 'reportTemplatesByMe',
            data: reportTemplatesByMe
        },
        {
            name: 'templateItemsLibrary',
            data: templateItemsLibrary
        },
        {
            name: 'reportTemplates',
            data: reportTemplates
        },
        {
            name: 'chartVusers',
            data: chartVusers
        },
        {
            name: 'chartCpu',
            data: chartCpu
        },
        {
            name: 'chartErrorsMobile',
            data: chartErrorsMobile
        },
        {
            name: 'vusersLegend',
            data: vusersLegend
        },
        {
            name: 'whitelistedIp',
            data: whitelistedIp
        },
        {
            name: 'loadTests',
            data: loadTests
        },
        {
            name: 'loadGenerators',
            data: loadGenerators
        },
        {
            name: 'flowsMeta',
            data: flowsMeta
        },
        {
            name: 'generalTab',
            data: generalTab
        },
        {
            name: 'generalTab_2',
            data: generalTab_2
        },
        {
            name: 'generalTab_3',
            data: generalTab_3
        },
        {
            name: 'treeFilterMetrics',
            data: treeFilterMetrics
        },
        {
            name: 'treeFilterEmulations',
            data: treeFilterEmulations
        },
        {
            name: 'metrics',
            data: metrics
        },
        {
            name: 'treeMetrics',
            data: treeMetrics
        },
        {
            name: 'treeTransactions',
            data: treeTransactions
        },
        {
            name: 'treeMetricsDefault',
            data: treeMetricsDefault
        },
        {
            name: 'treeMetricsFiltered',
            data: treeMetricsFiltered
        },
        {
            name: 'treeTransactionsPercentile',
            data: treeTransactionsPercentile
        },
        {
            name: 'treeTransactionsMetrics',
            data: treeTransactionsMetrics
        },
        {
            name: 'treeMetricsExpanded',
            data: treeMetricsExpanded
        },
        {
            name: 'metricsExpandedTrSummary',
            data: metricsExpandedTrSummary
        },
        {
            name: 'treeMetricsExpandedA',
            data: treeMetricsExpandedA
        },
        {
            name: 'treeMetricsExpandedEmpty',
            data: treeMetricsExpandedEmpty
        },
        {
            name: 'treeMetricsCollapsed',
            data: treeMetricsCollapsed
        },
        {
            name: 'treeMetricsCollapsedA',
            data: treeMetricsCollapsedA
        },
        {
            name: 'transactionsList',
            data: transactionsList
        },
        {
            name: 'transactionsShortList',
            data: transactionsShortList
        },
        {
            name: 'treeTransactionsSummaryList',
            data: treeTransactionsSummaryList
        },
        {
            name: 'treeTags',
            data: treeTags
        },
        {
            name: 'metricsTreeStructure_a',
            data: metricsTreeStructure_a
        },
        {
            name: 'results',
            data: results
        },
        {
            name: 'gauges_general',
            data: gauges_general
        },
        {
            name: 'events-bar-general',
            data: eventsBarGeneral,
        },
        {
            name: 'metricsWithLines',
            data: metricsWithLines
        },
        {
            name: 'events-bar-minimal',
            data: eventsBarMinimal
        },
        {
            name: 'entityOplg',
            data: entityOplg
        },
        {
            name: 'entityRendezvous',
            data: entityRendezvous
        }
    ];
    private myMap = new Map;
    constructor() {
        for (let i = 0; i < this.dataList.length; i++) {
            this.myMap.set(this.dataList[i].name, this.dataList[i].data)
        }
    }
    getData(name) {
        return this.myMap.get(name);
    }
}
