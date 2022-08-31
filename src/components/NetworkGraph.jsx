import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import networkgraph from 'highcharts/modules/networkgraph';
networkgraph(Highcharts);

const NetworkGraph = () => {
  const options = {
    chart: {
      type: 'networkgraph',
      marginTop: 80,
    },
    title: {
      text: 'Network Graph',
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
        if (this.point.color) {
          return 'color: ' + this.point.color;
        }
        return '<b>' + this.key + '</b>';
      },
    },
    plotOptions: {
      networkgraph: {
        keys: ['from', 'to'],
        layoutAlgorithm: {
          enableSimulation: true,
          linkLength: 200,
          integration: 'verlet',
          approximation: 'barnes-hut',
          gravitationalConstant: 0.8,
        },
        // borderColor: '#dc143c',
        borderWidth: 10,
        color: '#dc143c',
        dashStyle: 'Dash',
        allowPointSelect: false,
        link: {
          color: '#00008b',
          dashStyle: 'Dash',
          width: 1,
        },
      },
    },
    series: [
      {
        marker: {
          radius: 40,
        },
        dataLabels: {
          enabled: true,
          linkFormat: '{point.fromNode.name} \u2192 {point.toNode.name}',
          allowOverlap: true,
          enableSimulation: true,
          linkLength: 3,
          integration: 'verlet',
        },
        data: [
          { from: 'Node 1', to: 'Node 2' },
          { from: 'Node 1', to: 'Node 3' },
          { from: 'Node 1', to: 'Node 4' },
          { from: 'Node 4', to: 'Node 5' },
          { from: 'Node 2', to: 'Node 5' },
        ],
        nodes: [
          {
            id: 'Node 1',
            marker: {
              radius: 50,
            },
            color: '#E8544E',
          },
          {
            id: 'Node 2',
            marker: {
              radius: 40,
            },
            color: '#008080',
          },
          {
            id: 'Node 3',
            marker: {
              radius: 30,
            },
            color: '#ffff00',
          },
          {
            id: 'Node 4',
            marker: {
              radius: 20,
            },
            color: '#ff69b4',
          },
          {
            id: 'Node 5',
            marker: {
              radius: 10,
            },
            color: '#00bfff',
          },
        ],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default NetworkGraph;
