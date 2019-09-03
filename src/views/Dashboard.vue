<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        lg="6"
      >
        <material-chart-card
          :data="serviceUptime.data"
          :options="serviceUptime.options"
          color="info"
          type="Line"
        >
          <h4 class="title font-weight-light">
            Uptime
          </h4>

          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              small
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">98.7%</span>&nbsp;
            increase compared to yesterdays uptime
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>
        </material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="6"
      >
        <material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="red"
          type="Bar"
        >
          <h4 class="title font-weight-light">
            Email Subscription
          </h4>
          <p class="category d-inline-flex font-weight-light">
            Last Campaign Performance
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
          </template>
        </material-chart-card>
      </v-col>


      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <material-stats-card
          color="green lighten-2"
          icon="mdi-clock-outline"
          title="Time to value"
          value="8 weeks"
          sub-icon="mdi-calendar"
          sub-text="Delivery start to deployment"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <material-stats-card
          color="yellow darken-2"
          icon="mdi-emoticon-outline"
          title="Customer satisfaction"
          value="4.8/5"
          small-value="smiles"
          sub-icon="mdi-information-outline"
          sub-text="Post project follow up"
          sub-text-color="text-primary"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <material-stats-card
          color="blue lighten-2"
          icon="mdi-alarm-check"
          title="Value created"
          value="3:1"
          sub-icon="mdi-tag"
          sub-text="Spend vs return"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <material-stats-card
          color="purple lighten-2"
          icon="mdi-check-circle-outline"
          title="Prospects to project"
          value="98.888%"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        serviceUptime: {
          data: {
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
            series: [
              [98.2, 95.8, 99.1, 99.2, 98.2, 98.7]

            ]
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0
            }),
            low: 70,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 30,
              right: 0,
              bottom: 0,
              left: 0
            },
            ratio: 1
          }
        },
        dataCompletedTasksChart: {
          data: {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
            ]
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0
            }),
            low: 0,
            //high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        },
        emailsSubscriptionChart: {
          data: {
            labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

            ]
          },
          options: {
            axisX: {
              showGrid: false
            },
            low: 0,
            //high: 1000,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        headers: [
          {
            sortable: false,
            text: 'ID',
            value: 'id'
          },
          {
            sortable: false,
            text: 'Name',
            value: 'name'
          },
          {
            sortable: false,
            text: 'Salary',
            value: 'salary',
            align: 'right'
          },
          {
            sortable: false,
            text: 'Country',
            value: 'country',
            align: 'right'
          },
          {
            sortable: false,
            text: 'City',
            value: 'city',
            align: 'right'
          }
        ],
        items: [
          {
            id: 1,
            name: 'Dakota Rice',
            country: 'Niger',
            city: 'Oud-Tunrhout',
            salary: '$35,738'
          },
          {
            id: 2,
            name: 'Minerva Hooper',
            country: 'Curaçao',
            city: 'Sinaai-Waas',
            salary: '$23,738'
          },
          {
            id: 3,
            name: 'Sage Rodriguez',
            country: 'Netherlands',
            city: 'Overland Park',
            salary: '$56,142'
          },
          {
            id: 4,
            name: 'Philip Chanley',
            country: 'Korea, South',
            city: 'Gloucester',
            salary: '$38,735'
          },
          {
            id: 5,
            name: 'Doris Greene',
            country: 'Malawi',
            city: 'Feldkirchen in Kārnten',
            salary: '$63,542'
          }
        ],
        tabs: 0,
        list: {
          0: false,
          1: false,
          2: false
        }
      }
    },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      }
    }
  }
</script>
