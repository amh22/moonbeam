import * as Tooltip from '@radix-ui/react-tooltip'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import styled from '@emotion/styled'
import { COLORS } from '../../constants'
import Arrow from './Arrow'

const ToolTip = ({ trigger, children }) => {
  const { white, text } = COLORS
  return (
    <Tooltip.Provider delayDuration='100'>
      <Tooltip.Root>
        {/* 👇 Padding added to icon to increase hover surface area. Padding for 'LatestBlocks' component was offset accordingly */}
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipContent>
          {children}
          <ArrowContainer>
            <ArrowContainerInner>
              <Arrow width='14px' height='21px' fill={white} strokeColor={text} />
            </ArrowContainerInner>
          </ArrowContainer>
        </TooltipContent>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default ToolTip

const TooltipTrigger = styled(TooltipPrimitive.Trigger)`
  border-radius: 50%;
  padding: 2px;
  border: none;
  background: white;
`

const TooltipContent = styled(TooltipPrimitive.Content)`
  background: white;
  border: 1px solid ${COLORS.text};
  border-radius: 4px;
  padding: 8px 12px;
  margin: 0 0 12px 0;
  font-size: 14px;
  position: relative;
  z-index: 999;
`

const ArrowContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const ArrowContainerInner = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px;
`
