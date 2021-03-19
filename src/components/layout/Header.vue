<template>
	<v-card class="overflow-hidden">
		<v-app-bar
			absolute
			color="white"
			elevate-on-scroll
			scroll-target="#scrolling-techniques-7"
		>
			<router-link to="/">
				<v-toolbar-title class="logo">Amuse</v-toolbar-title>
			</router-link>
			<v-spacer></v-spacer>
			<div class="icon__container">
				<v-btn icon>
					<router-link to="/photo/asia">
						<v-btn elevation="2" small>Asia</v-btn>
					</router-link>
				</v-btn>
				<v-btn icon> </v-btn>

				<v-btn icon>
					<router-link to="/photo/america">
						<v-btn elevation="2" small>America</v-btn>
					</router-link>
				</v-btn>
			</div>
		</v-app-bar>
		<v-sheet
			id="scrolling-techniques-7"
			class="overflow-y-auto"
			max-height="600"
		>
		</v-sheet>
	</v-card>
</template>
<script>
export default {
	name: 'Header',
}
</script>
<style>
a {
	color: #000000;
	text-decoration: none;
}
.logo {
	color: #eb1749;
}
.v-toolbar__content {
	max-width: 90vw;
	margin: 0 auto;
}
.header_ .icon__container {
	margin-right: 2rem;
}
</style>
