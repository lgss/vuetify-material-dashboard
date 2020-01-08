<template>
  <v-container fluid>
    <v-row>
      <!-- customer satisfaction -->
      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <material-stats-card
          color="yellow darken-2"
          icon="mdi-emoticon-outline"
          title="Customer satisfaction"
          :value="((Math.random() + 4)).toFixed(1)"
          small-value="/5 smiles"
          sub-icon="mdi-information-outline"
          sub-text="Post project follow up"
          sub-text-color="text-primary"
        />
      </v-col>
      <!-- / customer satisfaction -->
      <!-- time to value -->
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
      <!-- / time to value -->
      <!-- service availability -->
      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <material-stats-card
          color="purple lighten-2"
          icon="mdi-check-circle-outline"
          title="Service availability"
          value="100%"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-col>
      <!-- / service availability -->
      <!-- value created -->
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
      <!-- / value created -->
      <v-col
        cols="12"
        lg="4"
      >
        <material-chart-card
          :data="serviceUptime.data"
          :options="serviceUptime.options"
          color="primary"
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
            <span class="green--text">1.83%</span>&nbsp;
            increase compared to last months uptime 
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">up is good</span>
          </template>
        </material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="secondary"
          type="Line"
        >
          <h4 class="title font-weight-light">
            Lead time
          </h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="amber"
              small
            >
              mdi-arrow-up
            </v-icon>
            <span class="amber--text">8 days</span>&nbsp;
            Time from proposal sign off to kick off
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">down is good</span>
          </template>
        </material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <material-chart-card
          :data="costPerPhase.data"
          :options="costPerPhase.options"
          color="tertiary"
          type="Pie"
        >
          <h4 class="title font-weight-light">
            Cost per phase
          </h4>

          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="grey"
              small
            >
              mdi-alert-circle-outline
            </v-icon>&nbsp;
            1:2:2 split
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">last updated in December</span>
          </template>
        </material-chart-card>
      </v-col>
    </v-row>
    <v-row>
      <!-- deployment frequency -->
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <material-stats-card
          color="green lighten-2"
          icon="mdi-axe"
          title="Deploys per week"
          value="9"
          sub-icon="mdi-update"
          sub-text="more is better"
        />
      </v-col>
      <!-- / deployment frequency -->
      <!-- deployment frequency -->
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <material-stats-card
          color="orange lighten-2"
          icon="mdi-ambulance"
          title="Support per tickets per user"
          value="0.2"
          sub-icon="mdi-update"
          sub-text="lower is better"
        />
      </v-col>
      <!-- / deployment frequency -->
            <!-- deployment frequency -->
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <material-stats-card
          color="purple lighten-2"
          icon="mdi-account-heart"
          title="Prospect to project"
          value="98.89%"
          sub-icon="mdi-update"
          sub-text="higher is better"
        />
      </v-col>
      <!-- / deployment frequency -->
    </v-row>
    <!--<v-row>
      <v-col cols="6">
          <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
      :height="height"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Project</th>
            <th class="text-left">Spend / Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
          <tr>
            <td>Best Start in Life</td>
            <td>

                <v-progress-linear
                  :active="projectSpend.active"
                  :background-opacity="projectSpend.opacity"
                  :bottom="projectSpend.bottom"
                  :buffer-value="projectSpend.buffer"
                  :height="projectSpend.height"
                  :indeterminate="projectSpend.indeterminate"
                  :query="projectSpend.query"
                  :rounded="projectSpend.rounded"
                  :stream="projectSpend.stream"
                  :striped="projectSpend.striped"
                  :top="projectSpend.top"
                  :value="projectSpend.value"
                  color="light-blue"
                ></v-progress-linear>

            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
      </v-col>
    </v-row>
    <button v-on:click="getProjects">Get Projects</button>-->
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        projectSpend: {
          absolute: false,
          active: true,
          opacity: 0.3,
          bottom: false,
          buffer: 100,
          fixed: false,
          height: 4,
          indeterminate: false,
          query: false,
          rounded: false,
          stream: false,
          striped: false,
          top: false,
          value: 73,
        },
        serviceUptime: {
          data: {
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept','Oct','Nov','Dev','Jan'],
            series: [
              [98.2, 95.8, 99.1, 99.2, 98.2, 98.7,98.9,99.1,98.2,100]

            ]
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 10
            }),
            low: 90,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            onlyInteger: true,
            chartPadding: {
              top: 30,
              right: 10,
              bottom: 0,
              left: 10
            }
          }
        },
        costPerPhase: {
          data: {
            labels: ['Lead Time','Design','Delivery'],
            series: [10, 45, 45]
          },
          options: {
            labelInterpolationFnc: function(value,series) {
              console.dir(value);
              return value;//Math.round(value / data.series.reduce(sum) * 100) + '%';
            },
            low: 0,
            high: 100,
            donut: true,
            startAngle: 270,
            showLabel: true
          },
          responsiveOptions: [
            ['screen and (min-width: 640px)', {
              chartPadding: 0,
              labelOffset: 100,
              labelDirection: 'explode',
              labelInterpolationFnc: function(value) {
                console.log(value);
                return value;
              }
            }]
          ]
        },
        emailsSubscriptionChart: {
          data: {
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],
            series: [
              [90, 75, 50, 88, 65, 28, 35, 32, 40]

            ]
          },
          onlyInteger: true,
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 10
            }),
            axisX: {
              showGrid: false
            },
            low: 10,
            high: 100,
            chartPadding: {
              top: 10,
              right: 10,
              bottom: 0,
              left: 10
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
      },
      getProjects: function(context) {
        this.$store.dispatch("app/getProjects",{},{root:true});
      }
    }
  }
</script>
