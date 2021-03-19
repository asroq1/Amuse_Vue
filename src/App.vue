<template>
	<div id="app">
		<Header />
		<Section />
	</div>
</template>

<script>
import Header from './components/layout/Header'
import Section from './components/layout/Section'
export default {
	name: 'App',

	components: {
		Header,
		Section,
	},
}
</script>
