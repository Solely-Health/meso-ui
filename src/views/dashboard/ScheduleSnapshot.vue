<template>
	<v-card class="mx-auto" tile>
		<v-container>
			<v-row justify="center">
				<v-col cols="12" class="text-center" sm="6" lg="4">
							<div class="my-3 subtitle-1 font-weight-bold">
								{{ today }}
							</div>
							<div class="my-3">
								<v-btn rounded outlined color="#EB5757" width="50%">Take Day Off</v-btn>
							</div>
							<div class="my-3">
								<v-btn rounded elevation="0" color="#80ACD3" dark width="50%">Edit Schedule</v-btn>
							</div>
						</v-col>
				</v-col>

				<v-col cols="12" class="text-center" sm="6" lg="8">
					<v-row class="flex-column ma-0 fill-height" justify="center">
						<v-simple-table>
							<template v-slot:default>
								<thead>
									<tr>
										<th class="text-left">Day</th>
										<th class="text-left">Time</th>
									</tr>
								</thead>
								<tbody>
									<tr class="text-left" v-for="item in schedule" :key="item.day">
										<td>{{ item.day }}</td>
										<td>{{ item.time }}</td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>
<script>
export default {
	props: {
		today: String,
	},
  data: () => ({
    schedule: [
      {
        day: 'Monday',
        time: '9AM - 5PM',
      },
      {
        day: 'Tuesday',
        time: '9AM - 5PM',
      },
      {
        day: 'Wednesday',
        time: '9AM - 5PM',
      },
      {
        day: 'Thursday',
        time: '9AM - 5PM',
      },
      {
        day: 'Friday',
        time: '9AM - 5PM',
      },
      {
        day: 'Saturday',
        time: 'OFF',
      },
      {
        day: 'Sunday',
        time: 'OFF',
      },
    ],
  }),
};
</script>
