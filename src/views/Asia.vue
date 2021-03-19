<template>
	<div class="img__container" @click="snackbar = true">
		<div class="img__box" v-on:click.stop="snackbar">
			<gallery :images="images" :index="index" @close="index = null"></gallery>
			<div
				v-on:click.stop="snackbar"
				class="image"
				v-for="(image, imageIndex) in images"
				:key="imageIndex"
				@click="index = imageIndex"
				:style="{
					backgroundImage: 'url(' + image + ')',
					width: '30vw',
					height: '30vh',
					cursor: 'pointer',
				}"
			></div>
			<div class="text-center">
				<v-snackbar v-model="snackbar" :timeout="timeout">
					{{ text }}
					<template v-slot:action="{ attrs }">
						<v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
							닫기
						</v-btn>
					</template>
				</v-snackbar>
			</div>
		</div>
	</div>
</template>

<script>
import VueGallery from 'vue-gallery'

export default {
	data: function() {
		return {
			images: [
				'https://lh3.googleusercontent.com/lur171ktGMQ3CkqNKPRNCgWAqN1FhZSZuq8PB8K33vEbEt_JnZ40iNnAKDf7MKRmDMKFX4LQBBNuc9RAc3XEtJHn18WYBXpD4zdIiqVydRJPXndxWP0fXT9so4W-sPlIW8ZJ8_-1FtOmYF8ROSXc8-xYknKix8k3rDn87fOL5XLBzmeahyY0mVZsdvDwV7kRSQFduRlxatBqMRmY53EaUEDslTjiEDDXNJgihTDLT1gagcY40Z3i6UWPDCxMr8IKtYVI6JVGe156qxeDhu1VevmNdfP3V-JYCt5lxnENvq1h2s_GtB42nCNdd6UdFKwGpMfY8_qcobbBbAcsXTXX4KK3vvU6wBf_fs6_g788rDLE-YoRh7P4UG4oHcqMT9usqRwEdd5xnpvEvXI23ZXfAKgZAGNNBIKPtmu5xa5Grr2lXtK2tnXA8m9qMvdV4K0wDi2lzPM5wAf_TxSe6MmddMHegwyen1-LjiEBbXlIJ9M6m1-ZUlduFguHBU418CIX1t-hqO8YHh8MQIRD1knn9TFdgrBPRm_RrF6rMrlLTSQ394MeNw1ARRN_KUe5ZyyDzGU26_nh8gQGPBJUeys_iDEscp3Wym2RYSW2Wt4Yev6dw_AGT4OtTmnGBPKJCsfJtLelh5XBphiSWBjc25MxkTUQUPncuMyy1VukcZhp0QvAt4mrNsbbnT6F76q6ozOG0hV7E2JX7VaQQLVtcIqb_ayX=w958-h639-no?authuser=0',
				'https://lh3.googleusercontent.com/pw/ACtC-3elbnYYwVynszX6gqvlLmhPrewDTPmkUNkoEH7q1_YKUFlDFpLFgNQIuH0K7ziM_prOLwKhshhngYZVJt3a-048so1IZmkoPlqJiAvFAOtMB2lJWPVEC-t774rYKx6RoqGP90anKdUr41XUpmCj2CA0Np-3z0igcdKk5eWILYnPpoKogI9xSLg0GdH7j74lQ8sTUtakrdKAsVkqCI18m5YVxydNvd1sZFIOuCtOhSo5Rb4VNc1zDhNKGOWYxH7rYg5zg6eILqP1IBfv3OK-lsiKyo41zFKn1qqk8J9BbZ4tpHa0thPOMhf4hHEdruVV6SlmcF64Gy38bJS8-oxTRuhXziRoZVlZEiK7-soB3EGh_Olaby5E5TdGwETA27X-Dz3n8DqJnjxxwEDue0-weJ2CeMz_gmDEydDD5O-Dm8yVr4KxTluONRwuqna-5OacCmgeiKRcFmlx1a7M-1vxjbuGqzTj14cXO57aGJp1M-zBLxUjjYtXcNWPB6mV1YUaJjQiJRCZiA0kun_5R0YoHT2TvGvxdCz3UTasn36Ea2MEjkeWWVZM19rM44PuKv5Z-CmnGmSL96Gsv7-V96zzNk6SIZB6MoqQlnPx-pSYaTFiTtMiw-bV90_UQy9kLUNtFvk6fA8D2OZWla2Alz-4k0D9Tv3p-jlcYuG2NsB8mY95K2EwGd8n4qWer7Cw295Ma40g45UX4u7PhBs3CWyIdw1HoQR4aQZLg4rwgGT_3JWOS_k=w336-h224-no?authuser=0',
				'https://lh3.googleusercontent.com/4DzlJoBYrBRSmkug0mB8oUJ-_mled_DgnsZOsMz0QEALRoQweuYtQb7BE6i9_BQrRhuj5ooqjmKyzvXRncOQHitZ9iz2ukB1dZaSbKDT7y2n2Q5nRqQ-MioksAWsI2PJM-YZyCbA0P922Q5l0uYXss4GqpQz_2UG9bUIrRHPSNuQSRQOPZOS_ykL7UNPC6H5-gx7y-PrBSBFA2ZiPGBY57dCrbt7JnwGp2XxWbWTRqYt5Q89WU01g_A0V7f2NC8hpfjamx4s-NVPKk4PbfzHJ_khlxuR3o7LP-TMFcl0qtS4It0_c1baUTgpdCSiHfX6fISyYPvRrx-q3m7FxCICqolHExW8Oi3Al6HCmuguOgHD7shCVqmVxKUil2h1c5mL0GjCGKKsygJachsJml4QLbXnbnhIcdZ_eVjCHRfp5eszflwFRqEwLOOPToFSLWVNMaW__hn95YcHEj4D6Oy0Rn7JPYrw56q_VHiFLrdz0J8DQURQuuHSoeYkKNt8gSkIJAj2o8oXL3Pl3Agf3QTYxcDtrj2MPcu7Z8Gi1aO1_WMiVgHfXUQHMP0Ob9_pyrOmRuJ0ybX-kwr9qNhsxsrXSdxBeUxBJSYlIssqmdlRGL0hQqLKOZGKJztWAbujV8MMojV56O5veEmQLpL9rf5I6OAy6EKT2oT0hRqPPCgrRpjYTzj-D6yiNChJB4v3mjaTeJ8axCF5LIA_kkRBTIyTWZ1p=w958-h639-no?authuser=0',
				'https://lh3.googleusercontent.com/4EW8Orcop0SFv9bNGWXW52vJ9ro1IhDo_96FJMRqfU2Z5zywJiwf995zKy_AReAutmFIIjKbsHLpafW7ybL425-9OWQbKP50fsVgdV8IIGK-SbyAnvXuSZXrC8wZ850PAeaFs44XwGqS_aKJ368OVjR8es1oxQKYlwDcuJtdDM3qvPLPPf3R_gCaHd5zRmN2T3B1qQZlFHcS3jlPQ-2386VAVbC-hZQrjIxwp5Ed5BEU3ag74AQeqmwxUjuIg5Iojry9cSPi8BEx8NPi8McwyqugGsGebXssx1r9zlHoVlls9pWlXfQl2iVkPHNkPOcJIqg46z1aNrhyJwLCkiXmQ655W48tDqtt2fbg7IW4hkEYQjRBNSuYd4VuSPcTEKixg4pqtl-0x7nMowPYBu-fjfrH-3l3_ivsecqf9KB6egSEKb0ZzELI3KC0wfbJYgTshciCzeqMx9b_GLPxp3YAumUwX6qsz4u-kTjHzlMrd3G1drCKroqm7FWljHr4HWodcuTKJiZ8ugtMiVSMtz88wUyhR-ZZcCv-Fj1TrAbe9G-DpNt5cV0psKT8EWi5KdokTIYuNzu7l1_J8racimOEdaNTOhZiW0hmvkJuJw9PJGvnjaEsIZHL_03gM53ahspMSRdK3YAvsSqszC9dvBwnkD-888APbmXmcVBnL5KwTIoG4E_ktEJSv8vQp2Va7AyHH7JA0GrcnAdqpdby3Ne35wk1=w958-h719-no?authuser=0',
				'https://lh3.googleusercontent.com/pw/ACtC-3c2fBpi-5-7sPdxoqwnLVBe8SmuzfxRgDwaOkoumBZzBWI80Indd0wp9-j9ICjympLEC8x3TyuxREpUAqaX9kjGCUyp-mQm7HaTHD1jKG4uBXDCv1gSRjuN2fR_2EfXbyTTalDD0hWJB1VGQM1hO8hpeaW6QwlPblpmu5iUc2QIagNGieIPf0ZqsXOIk0IaFMacAOusKcB0vx7yuD0TQCV4kXneCxY4YZVLChbhAspWNuhS1ash1c0JbFqLjfzChXvJFr384lXNslejjeYQMNsWl9aDHioxWBEmPl7i3c3U2oFpHA_q0ABb5cTgjp3rYBFVMigPdM1LHKZRG5L5LLxkq8Fbgj6yRLL67WYfUR-IVS3tNFx__xZGoH0aOS-DvAyPvRc7Pu7ccYnfkVOD6TrY_UgFVH62pfp_AiLXim0o8k5FrPvzjzkTJT5fOS1dplw9I3_uc-5vO6TSyDratNpz77sOQRSppasf9SHks-ZO-XnfIQrZdsMwbTeh58gb6EmvytVJzAXuNGwHB4geYp5WuFZQrHtJjKgc5h92yKWR3IyQffP2HDw0ivVRO95sQLxi_h3enigFe5tRvVsrJD82Ths4oc-Sy0iY48KcA-4aGqg2F7QWpxKF0YcSkCs9mfA3_24k24wetskocLDEj2aLNeBUgvXjciRiR_PhxsdIzT7q2WS6wnWUcTX26r_uqawq1goWEJf4bpEq3djWqM-2n_dq40-d61fdkSsCBrC3b9Pk=w958-h719-no?authuser=0&authuser=0',
				'https://lh3.googleusercontent.com/dPfw-bMSnoqHc2m6zIjzvoZeKY7MF2gsL7wgFkocg9THQPge4Ev7QJVNZb3dtYbyqFDx9UGjGqYZI0hQX8xTK361gi6_Q1f-VhNNkOxF9MftaBcwUqvbuFdE5DHDltUdH9m7dAD07WPGyzJBkHQYljbVXoPMNZq0q18MpsqIbras75BrMsANVcPMdQGEsLQOCmXAHEqEvBn0qZYr2ExwCKG3fPpMXb339Rut0MYAO5DdNHJLoKvPoulpnwYbN4nYjh8DUb_bs-foa3p2XgAG0ioM5qtYUizXZBtR9Z1tVMu7r7r7EX3O3f-rvO1NnTPEiRp_10oruWeOef8hDqu3h0cbipls6reQqTxs2KElmU18F0WEP2pzzskISGCsZdrp1KmGSPa_VRQXSa165yHl-o8Bsn8jp8l64z4ewToAsaeD1Bd9Mo2G5hzAZhY0ank6umY3wL788HzxvhEkfoRRXRRzLdieSrP0kWE9oH4NNSMvt0A2Rz16u0fKbd0FIVjuWkbdCsnJfpsn0smhs1PQmxNFS2CoGXAuIVpg9jhM9uv_AwfFYuGrtnURzJnxTfxiPnwnOZ-v8gR25a5qjBNPqnwPsnqbc2L5JzTG9zgp2h9lytAZdANFoq4k1cgLzLqtqTysi72lmvxBaeoWE6Um4FNPASIUW-ZDbO0aXAvuycTShZ7jLFKctMLfVviETallBqHBypezwSIgwCa36cSMqoV9Ag=w958-h719-no?authuser=0',
			],
			index: null,
			snackbar: false,
			text: '이미지를 누르세요.',
			timeout: 1000,
		}
	},
	components: {
		gallery: VueGallery,
	},
}
</script>

<style scoped>
.img__container {
	width: 100vw;
	display: grid;
	place-items: center;
	min-height: 100vh;
}
.img__box {
	display: grid;
	grid-template-columns: 30vw 30vw 30vw;
	grid-gap: 0.8rem 0.8rem;
	align-items: center;
	justify-content: center;
}

.image {
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	border: 1px solid #ebebeb;
}
</style>
