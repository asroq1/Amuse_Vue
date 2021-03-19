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
				'https://lh3.googleusercontent.com/mzaDAJcHZDkstrt-2tj2s-t19e52UkUOXFeyU1u5sJslCt4O3cfhXCgWZWi6tXh-VKdXHfZQjZEHvqkYY_JtL3PwOOqlO-euLogVPFpvZr_MtgduJ0lMfs2piZHOzmCtSRd_lstoQPS2IAAiGI8nx8WPixvKjiJRi03EIuxZ8VNv6tkWwTbl_bLr6hPm2ZnyAIJ9qx3tU6LRcAeXtvsjgKQ4f7IUhCaJe77P7zihjOOUACasilvKi7AloCDbc7xvZa8fsW5YSbJ_DyMtdduaoihIS0L4nBAOjvucuSWVQKiRYmBqiWyUduGQzxDzPFuABualSIuNPAx6qTpj5WazX_fdtglUMNoqPRed7E8kzCL6BI7MkMlH1gijJhD_WMTdjHzOo7nqetow1t1VZZKvAmaIONBFHdzYZapd5B5ukojE2f_t9rhSOxjxMLbJweCwxyN9BkAsHp2aeomNPNr2lrsxf1QZG3tjdS36hk5TPkE4UsX8ekK3H5hGIOg8O2U5Dy9BrTe9pmSJHfSEL6MDLFS0uqVa94WQQwYpQJ3wjQvq9JpL0w-BRDgzq-ftkom0jPr_cTIbJeKh7EfJUFZvjvql-jfxKx2d6zFk4L1V6I3bupJAkYY9veV299eS6ml7SkHmtZrOELCddqfKedUbQdfSciRHDNiBmLrmdrao2WXS1g3cg9Y_hZINi6QINNYKvzr7dbEbOFoE2miAVFigNYFURA=w171-h229-no?authuser=0',
				'https://lh3.googleusercontent.com/8GBtgRofBGPFMYybbN-fUeW-YLS2cCbGbWyn5kV_1dm2_xcgHAJuP7T9PSskI289c8Tk3v5DKuTwF1achRuIcIHJSLHa2TnRFfnBp8aZF3QslUIs88NzPG5bEJKJkSDNEIJWIRTKzvvJrNjWCCaEYUCUsDMOsCvAfbWMd85kq4HGizE4OUVTqWfC8BC1EkFQ1CNQOVIX6Y-mKR5o7DFrFUEJPiFav2zuscuWOvJ8Ti5Od4SR9GZrxFryW7abWFfqrjtVViaLlBCi9HGHZ-_9dcjW3l5BlZj9c44EOLQ1l3qQJXVA1zXmoIDel7XmOENnOrdNRtTC7mmCw6Qqu5gEppd533VV2PpT5GTIc-bIbE64yKqIXoYesoZjj25A-yiBBfvEcNwTAlqKRJH5iBv9kF4qxj7r2jS74zQaT7m_RH5mkswvyhuDpNpzVRnUAlyJAQunz3VCT7tD5Z1Let-QYKpjaIm_r3BsenGRD_XL4Zt6pCoHUejHViGkRs_qwXqD57YOR9xDikYG3SAcSn8QKsDqiLfMZonT4jETU8CURYSJxhLdc2lTJ_5dzvvZ3n5DvVPjUwyA0nmXPANZgbu24rpUsgnDGW5uCuEnVxwXzWcGasc802f0GtqFXHmByf4kFWutNXXvFuK509tjbQu6-axndh8ZxnSMRdZQYYPyriDVQyw1lTEgViKfVxcq22giGwSg4OcQYyXA11sdsNG0R_kOUQ=w960-h720-no?authuser=0',
				'https://lh3.googleusercontent.com/Nkt99qGuZLzq86aZLoRjoXaqN-xN72ak7xKjm4pI2B-H5G8_IxqD5P2Dptysy9qPvddkbCT_dtYRVfCb2KCwFo1q2ui0uPEgEz9VtSPVmaXZUufx7iDNjfjec1gmYjp7r5zEHWOPeikV_fjAkKSvUDAnCLVdGFh8KgMJAjPMSO6B9Vm9WolEqRoDu5TPx1sxg9i_QPSeXxe7L3uD1UNzmmYgHcOwHw6kFWsib3BzKxZY25VyH9GNBRVPMFbhw6rJWSIxo_UfTkH25lk4C8gg2TcjLNXZTbDvpBHgolxCXqwNDAk1aivuV2ZPKu-IZ1uCHVOFG703AScvAGWx50kAK_ziA6of-FgeOrSNBdl7QDrMgNHPU0aQmzCusymcHad-Lvn1VHcD-C6D8ZYtZdFrspg6gSqod-qqoTBhzdRU_upYLKhhxSHyjxhXP5R7YMJxH-gd3bPqbYLebgDADAXIUuDdEb6R6zQH8tC0unegireU6DEMHBcnuRcM88AAtSw9YgtDCJ5Qlpm_1eDpEOQ5lpo1cOeIm-Sb9PPb4Ya2XINHH5XLLjJENuta9_b8NztW1utb_0uMe2jYQW3476JvsJK9KF2ok8xV6GKRzLYY4aG64xzWVHZdpHSMCOl13MzXS-MrCl9COum_BT1csRYvZDy3et8ScMcS00dWu-N8zpaDsXDcaJytjoDdByX5N9VGyh8xsWj4--UDScRBLvFcTljDgA=w960-h720-no?authuser=0',
				'https://lh3.googleusercontent.com/t-skhgplkSbxe9AIl7rKCE0U8i2F-OlXicxXHKBMCc_BNu0_KmVQLUCeq2_bHtduiPJpbl_6n4RUGVe_WfqGeBRZJumrix3SYaQG3RKyaKi9sbCRsfW0FrB2ysHo2dmBbtqmPftSC0n9hMHxwt8hfZ0mu_tOUA0Ao0JI-W9UfRvoUv6mfQE0sIvhoWdKNRAhJVLX9kZP4DFF05i-n4QKVgIOMm4Szh_UJ8taXOugHqeCnq7HnWN7J0_rBB5x_xflehW7D9-Ges5q5JE2fiBRxERospBPQezVMxMLCy4dFD49pOIfYBX53pnwLL66BXbufQldeim-S4w-IUJEZkJ0G84OgUzhjaQ-Ghl78o-PjjpyJm5zYy-bPwFDBJQ9ECNagUiDqbCQskb54plAtgFQQIzlpdHgd8meDrZH8Lm6omxa2qEIMBMO9gvIHp0ez20D2XuoBcX-a9oE25C3K1jR4WFYn-MtS7nNLu6pqjWO2apTOiucPDXZHt2v76yGeKUUeFqB7M0KOtm-LyrZccLwi0FM6eQ6f0wr_csdiiUc6-JK4SdE8xP2GlVscFcUEabEslLGEIJSqQzjVqROClszzEJRjEHpn-OKUbC7BVfzpR4iJANtx97z29J-xt8gWObbdUrgtJLfgtSbVOEjjxa1aQCZLxD_3721Bq_adIkzIO8zHZIRWyA8aJcDuJVOndoaedGMxIck62mJYc0QFLcQ3kB3HA=w960-h720-no?authuser=0',
				'https://lh3.googleusercontent.com/zT9WBYPcwb-u1bniSiNs_08hurHXnGysbySmN0Skrm-3bKFQ_vGjTeP71j5TtHGtm2CpN3nJSjVqkfTXQgWlPdpl2QVk7CsFo8RObXLpMsQUxoN9ilNwBXZLZk7tkQx9YbW4OjmCzLRKr4j1OO8ETcQYQa5RaXz8TSZi4xDwsDgm09p9CdwZSFr67BKvbMim2tjeafnH0ZKwBnv0NLJQ6nlaeHFGR7-M26xwEaMMXCrwOUElxxuHHilxVlKNNlIrsCKt0gNIhX_xPY0JuH8pcQZo-UG80UtrDWED_P_uK14LvFTfXtDYzLXu7QY9LpuLF6yeywbTQzbC_I9u4ahVb0RO76Miw6QZK1vRqhbja3Hq-YtV17Z1xd7JoMgbKzeWPHgrGD85XIIjNPSK9E9KvLYE0pjiMGTji7tBBtdLVmxqKcDO2God7PTOJJmVvbi_1HGukRmEAwKf9IcE2sCvFU7YtsjZgRR5G-cjMYsD5eVVQftuM9D_PjAK3yhTeolzATgErYTmucHZcQ5JpVvN1bp0QQjj5Mget3z9Ark8a3wqbhOZYboPsS2TgFAKDU4REy4_wKWphcOE9pu-NZwHp5FRYlIyvmqoO8x5cIock0zC0MZkW3d1UFFdB7Ym_32JJEuH1PTKvfYn-uTMd2P3B9f15Kz0EWX0VerYT4VvR8gxegAMl2rATCusjn_Mw8CFUGUiJLtp7Uqw6Y6tNVvAmANPww=w960-h720-no?authuser=0',
				'https://lh3.googleusercontent.com/KwTJ-zXkb3xuvjW342NQg8N4gJVazvoeIHlP5ipeNpMtDXNqHymsI_BsnUUflhS8pjoVbJpDmZNbIYe-GmOh1IgE1G-jxCa99ShuYOoXQ8-XWEUkT3d4PF-x37vleHD6-cNW-8cA5H9hzZpT-66Iu_N6bw-Fgv7MQaE5oFRHK27YuTH2VoRVQ-B9mRmR3jJQpH0NGe8MqHmrYPAKfVMvpW5qDK_xmw5NJk3QlyYe3YR_v-AfBvgMxM2dz_PDoO7L4HfCh4uyp-kcSnzzyemtjwWKU8IakHnHKMGBKL5S-67MeLnuvADOcjxbDO5KGiMQAFmRI7Z50wk078TBQwHkbFrDeXlkBfIC-UhAzuKYzs9-PmRI1dyQfpYLNeQOk_rWhFaD5Rii6Y-KrZLNHsKKF7DdB9hYcSSjRiss3-4Fsl1dGd3syc-V560mJ6ydrkaIEb4szhmHQW7odLAdsF1aPOu_9BW00xwfIYNF7SxtViotuDvwEumVdx_H8E8lxvpbN9965L06iPob5Xfc5gq9C4msPXxhU9vn2gSwrFjYbVMrPSiuqSSo6zo2H_i_dgzMW74LXv7ochmWb_yu7wDMZQk5nHTNmFGKdLj5rgC1luJoFpUVFKoX_b2XlhVILDBLJK0qE0C9ZiFV0ZmQjZj4Pc1wo9wVp9PZU8NclsqV3AkWbLOxtCrnhPw7TlLCCMcW_wBKc21jh-OGHC6RamV-PhxJSw=w960-h720-no?authuser=0',
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
