import { IPInfoProps } from '../../@types/IPInfo'

export default function IPInfo({ ip, location, isp }: IPInfoProps) {
	return (
		<dialog
			className='mx-auto -mt-[100px] grid w-[90%] justify-center gap-4 rounded-2xl border bg-white p-6 text-center md:grid-cols-4 md:p-11'
			open
		>
			<section>
				<h2 className='mb-1 text-[0.625rem] font-bold uppercase tracking-widest text-dark-gray'>
					IP Address
				</h2>
				<p className='text-xl font-bold text-very-dark-gray'>{ip}</p>
			</section>
			<section>
				<h2 className='mb-1 text-[0.625rem] font-bold uppercase tracking-widest text-dark-gray'>
					Location
				</h2>
				<p className='text-xl font-bold text-very-dark-gray'>
					{`${location.region}, ${location.country} ${location.postalCode}`}
				</p>
			</section>
			<section>
				<h2 className='mb-1 text-[0.625rem] font-bold uppercase tracking-widest text-dark-gray'>
					Timezone
				</h2>
				<p className='text-xl font-bold text-very-dark-gray'>
					UTC&nbsp;{location.timezone}
				</p>
			</section>
			<section>
				<h2 className='mb-1 text-[0.625rem] font-bold uppercase tracking-widest text-dark-gray'>
					ISP
				</h2>
				<p className='text-xl font-bold text-very-dark-gray'>{isp}</p>
			</section>
		</dialog>
	)
}
