<template>
  <material-card
    class="v-card--material-chart"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:header>
      <chartist
        :data="data"
        :event-handlers="eventHandlers"
        :options="options"
        :ratio="ratio"
        :responsive-options="responsiveOptions"
        :type="type"
        style="max-height: 200px;"
      />
    </template>

    <slot />

    <slot
      slot="actions"
      name="actions"
    />
  </material-card>
</template>

<script>
  export default {
    name: 'MaterialChartCard',

    inheritAttrs: false,

    props: {
      data: {
        type: Object,
        default: () => ({})
      },
      eventHandlers: {
        type: Array,
        default: () => ([])
      },
      options: {
        type: Object,
        default: () => ({})
      },
      ratio: {
        type: String,
        default: undefined
      },
      responsiveOptions: {
        type: Array,
        default: () => ([])
      },
      type: {
        type: String,
        required: true,
        validator: v => ['Bar', 'Line', 'Pie'].includes(v)
      }
    }
  }
</script>

<style lang="scss">
  .v-card--material-chart {
    .v-card--material__header {
      .ct-label {
        color: inherit;
        opacity: .7;
        font-size: 0.975rem;
        font-weight: 100;
      }

      .ct-grid{
        stroke: rgba(255, 255, 255, 0.2);
      }
      .ct-series-a .ct-point,
      .ct-series-a .ct-line,
      .ct-series-a .ct-bar,
      .ct-series-a .ct-slice-donut {
          stroke: rgba(255,255,255,.8);
      }
      .ct-series-a .ct-slice-pie,
      .ct-series-a .ct-area {
          fill: rgba(255,255,255,.4);
      }

      .ct-series-b .ct-slice-donut,
      .ct-series-b .ct-slice-pie {
        stroke: #213E5F;//secondary
      }
      .ct-series-c .ct-slice-donut,
      .ct-series-c .ct-slice-pie {
        stroke: #189E99;//primary
      }
      .ct-chart-donut .ct-label, .ct-chart-pie .ct-label {
        fill: white;
        fill-opacity: 1;
        opacity: 1;
      }
    }
  }
</style>
