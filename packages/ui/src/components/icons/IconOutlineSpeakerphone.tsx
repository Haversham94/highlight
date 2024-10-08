import { IconProps } from './types'

export const IconOutlineSpeakerphone = ({
	size = '1em',
	...props
}: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
			focusable="false"
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M18.351 2.064A1 1 0 0 1 19 3v3.126a4.002 4.002 0 0 1 0 7.748V17a1 1 0 0 1-1.753.658c-.613-.702-1.699-1.375-3.188-1.872A14.547 14.547 0 0 0 12 15.271v3.97a2.76 2.76 0 0 1-5.359.927l-.002-.006-2.01-5.76A5 5 0 0 1 7 5h1.832a18.768 18.768 0 0 0 2.07-.112 15.426 15.426 0 0 0 3.157-.673c1.49-.497 2.575-1.17 3.188-1.872a1 1 0 0 1 1.104-.278ZM10 6.968A21.14 21.14 0 0 1 8.832 7H7a3 3 0 0 0 0 6h1.832c.394 0 .784.01 1.168.032V6.968Zm2 6.275V6.757a16.89 16.89 0 0 0 2.692-.646c.84-.28 1.62-.626 2.308-1.035v9.848a11.903 11.903 0 0 0-2.308-1.035A16.807 16.807 0 0 0 12 13.243Zm7-1.51a2 2 0 0 0 0-3.465v3.464Zm-9 3.303A19.108 19.108 0 0 0 8.832 15H6.955l1.57 4.496v.002A.76.76 0 0 0 10 19.24v-4.204Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}
