import { IPInfoProps } from '../../@types/IPInfo'

export default function IPInfo({ ip, location, isp }: IPInfoProps) {
	return (
		<dialog
			className='z-[99999] mx-auto -mt-[100px] grid w-[90%] justify-center gap-4 rounded-2xl border bg-white p-6 text-center md:grid-cols-4 md:items-center md:p-11 md:text-left'
			open
		>
			<section className='md:border-r md:px-4'>
				<h2 className='mb-1 text-[0.625rem] font-bold uppercase tracking-widest text-dark-gray lg:text-lg'>
					IP Address
				</h2>
				<p className='text-xl font-bold text-very-dark-gray'>{ip}</p>
			</section>
			<section className='md:border-r md:px-4'>
				<h2 className='mb-1 text-[0.625rem] font-bold uppercase tracking-widest text-dark-gray lg:text-lg'>
					Location
				</h2>
				<p className='text-xl font-bold text-very-dark-gray lg:text-2xl'>
					{`${location.region}, ${location.country} ${location.postalCode}`}
				</p>
			</section>
			<section className='md:border-r md:px-4'>
				<h2 className='mb-1 text-[0.625rem] font-bold uppercase tracking-widest text-dark-gray lg:text-lg'>
					Timezone
				</h2>
				<p className='text-xl font-bold text-very-dark-gray lg:text-2xl'>
					UTC&nbsp;{location.timezone}
				</p>
			</section>
			<section>
				<h2 className='mb-1 text-[0.625rem] font-bold uppercase tracking-widest text-dark-gray lg:text-lg'>
					ISP
				</h2>
				<p className='text-xl font-bold text-very-dark-gray lg:text-2xl'>
					{isp}
				</p>
			</section>
		</dialog>
	)
}
