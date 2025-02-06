import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';
// import Image from 'next/image';
import { ImSpinner2 } from 'react-icons/im';
import { Logo } from './_components/Logo';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children?: ReactNode;
	showRadialGradient?: boolean;
}

export default function Loading({ className, showRadialGradient = true, ...props }: AuroraBackgroundProps) {
	return (
		<div
			className={cn(
				'transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900',
				className,
			)}
			{...props}
		>
			<div className="absolute inset-0 overflow-hidden opacity-50">
				<div
					className={cn(
						`pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--red-500)_10%,var(--orange-300)_15%,var(--red-300)_20%,var(--pink-200)_25%,var(--red-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [background-image:var(--white-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%] after:absolute after:inset-0 after:animate-aurora after:mix-blend-difference after:content-[""] after:[background-attachment:fixed] after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] dark:invert-0 dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

						showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
					)}
				></div>
			</div>

			<div className="mb-4 block h-fit w-fit grow-0">
			<Logo className="h-[28px] w-[240px] sm:h-[36px] sm:w-[300px]"/>
			</div>
			<ImSpinner2 className="size-6 animate-spin transition-all " color="white" />
		</div>
	);
}
