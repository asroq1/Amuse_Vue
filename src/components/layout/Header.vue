<template>
	<v-card class="overflow-hidden">
		<v-app-bar
			absolute
			color="white"
			elevate-on-scroll
			scroll-target="#scrolling-techniques-7"
		>
			<!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

			<router-link to="/"
				><v-toolbar-title>Amuse</v-toolbar-title>
			</router-link>

			<v-spacer></v-spacer>

			<v-btn icon>
				<!-- <v-icon>mdi-magnify</v-icon> -->

				<router-link to="/photo/exciting">
					<v-btn elevation="2" small>Exciting</v-btn>
				</router-link>
			</v-btn>
			<v-btn icon> </v-btn>

			<v-btn icon>
				<!-- <v-icon>mdi-dots-vertical</v-icon> -->

				<router-link to="/photo/peaceful">
					<v-btn elevation="2" small>Peaceful</v-btn>
				</router-link>
			</v-btn>
		</v-app-bar>
		<v-sheet
			id="scrolling-techniques-7"
			class="overflow-y-auto"
			max-height="600"
		>
			<v-container style="height: 56px;"> </v-container>
		</v-sheet>
	</v-card>
</template>
<script>
export default {
	name: 'Header',
}
</script>
