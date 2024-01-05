import { useEffect, useState } from 'react'

import { Form, Field } from 'react-final-form'

import { withMask } from 'use-mask-input'

import IPInfo from './components/IPInfo'

import { IPInfoProps } from './@types/IPInfo'

import { api } from './apis/ip_geolocation'

function App() {
	const [ipInfo, setIPInfo] = useState<IPInfoProps | null>(null)

	const plan = 'country,city'

	const onSubmit = (values: { ip: string }) => {
		function updateState() {
			api
				.get(`/v2/${plan}`, { params: { ipAddress: values.ip } })
				.then((response) => {
					setIPInfo(response.data)
				})
				.catch((error) => {
					console.error('Status:', error.response.status)
					console.error('Dados:', error.response.data)
				})
		}

		if (values.ip) {
			updateState()
		}
	}

	const ipMaskRef = withMask('ip')

	useEffect(() => {
		api
			.get(`/v2/${plan}`)
			.then((response) => {
				setIPInfo(response.data)
			})
			.catch((error) => {
				console.error('Status:', error.response.status)
				console.error('Dados:', error.response.data)
			})
	}, [])

	const initialValues = ipInfo && { ip: ipInfo.ip }

	return (
		<main className='h-svh w-svw font-rubik'>
			<Form
				onSubmit={onSubmit}
				initialValues={initialValues}
				render={({ handleSubmit }) => (
					<form
						onSubmit={handleSubmit}
						className='flex h-2/4 w-full flex-col items-center gap-4 bg-mobile bg-cover p-6'
					>
						<h1 className='text-2xl font-medium text-white'>
							IP Address Tracker
						</h1>
						<section className='flex w-full'>
							<Field
								name='ip'
								render={({ input }) => (
									<input
										{...input}
										ref={ipMaskRef}
										id='ip'
										type='text'
										className='w-full rounded-bl-xl rounded-tl-xl px-5 py-3 text-input text-very-dark-gray outline-0'
									/>
								)}
							/>
							<input
								type='submit'
								value='>'
								className='w-16 rounded-br-xl rounded-tr-xl bg-black text-lg font-bold text-white hover:bg-very-dark-gray'
							/>
						</section>
					</form>
				)}
			/>
			{ipInfo && (
				<IPInfo
					as={ipInfo.as}
					domains={ipInfo.domains}
					ip={ipInfo.ip}
					isp={ipInfo.isp}
					location={ipInfo.location}
				/>
			)}
		</main>
	)
}

export default App
