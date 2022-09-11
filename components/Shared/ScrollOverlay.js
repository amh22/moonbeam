import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import styled from '@emotion/styled'
import { COLORS } from '../../constants'

const ScrollOverlay = ({ children }) => {
  return (
    <>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='vertical'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation='horizontal'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </>
  )
}

export default ScrollOverlay

const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`

const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  ${'' /* ensures no selection */}
  user-select: none;
  ${'' /* disable browser handling of all panning and zooming gestures on touch devices */}
  touch-action: none;
  padding: 2px;
  background: inherit;
  transition: background 120ms ease;
  &:hover {
    background: inherit;
  }
  &[data-orientation='vertical'] {
    width: 10px;
  }
  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 10px;
  }
`

const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb)`
  flex: 1;
  background: ${COLORS.greyMedium};
  border-radius: 10px;
  ${'' /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */}
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 26px;
    min-height: 26px;
  }
`

const ScrollAreaCorner = styled(ScrollAreaPrimitive.Corner)`
  background: #f3f3f3;
`
