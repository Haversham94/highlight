import { Box, Callout, Text } from '@highlight-run/ui/components'

import LoadingBox from '@/components/LoadingBox'
import { Panel } from '@/components/RelatedResources/Panel'
import { TraceHeader } from '@/pages/Traces/TraceHeader'
import { useTrace } from '@/pages/Traces/TraceProvider'
import { TraceSpanAttributes } from '@/pages/Traces/TraceSpanAttributes'
import { TraceVisualizer } from '@/pages/Traces/TraceVisualizer'
import {
	RelatedTrace,
	useRelatedResource,
} from '@/components/RelatedResources/hooks'
import { useEffect, useState } from 'react'
import { SearchContext, useSearchContext } from '../Search/SearchContext'
import { FlameGraphSpan } from '@/pages/Traces/utils'

export const TracePanel: React.FC<{ resource: RelatedTrace }> = () => {
	const { highlightedSpan, loading, selectedSpan, traces } = useTrace()
	const span = selectedSpan || highlightedSpan
	const path = `${window.location.pathname}${window.location.search}`
	const { searchParams, updateQuery } = useRelatedResource()
	const [query, setQuery] = useState(searchParams?.get('query') ?? '')

	useEffect(() => {
		setQuery(searchParams?.get('query') ?? '')
	}, [searchParams])

	return (
		<SearchContext initialQuery={query} onSubmit={updateQuery} disabled>
			<Panel.Header>
				<Panel.HeaderCopyLinkButton path={path} />
				<Panel.HeaderDivider />
			</Panel.Header>

			<Box overflowY="scroll" px="36" pt="28" pb="20">
				{!traces?.length && loading ? (
					<LoadingBox />
				) : !traces?.length ? (
					<Box p="8">
						<Callout kind="error" title="Trace not found" />
					</Box>
				) : (
					<Box>
						<TraceHeader />
						<TraceVisualizer />

						<Box mt="40">
							<Text size="large" weight="bold">
								Info
							</Text>
							<Box bb="dividerWeak" mt="12" mb="8" />

							{span && <TraceAttributes span={span} />}
						</Box>
					</Box>
				)}
			</Box>
		</SearchContext>
	)
}

const TraceAttributes: React.FC<{ span: FlameGraphSpan }> = ({ span }) => {
	const { onSubmit, queryParts, query } = useSearchContext()

	return (
		<TraceSpanAttributes
			span={span}
			query={query}
			queryParts={queryParts}
			onSubmitQuery={onSubmit}
		/>
	)
}
