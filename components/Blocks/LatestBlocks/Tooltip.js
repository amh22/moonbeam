import { BsClock, BsCheckCircle } from 'react-icons/bs'
import * as Tooltip from '@radix-ui/react-tooltip'
import Arrow from '../../Shared/Arrow'

const ToolTip = ({ finalized }) => {
  return (
    <Tooltip.Provider delayDuration='100'>
      <Tooltip.Root>
        <Tooltip.Trigger style={{ borderRadius: '50%', padding: 0, border: 'none', background: '#fff' }}>
          {finalized ? <BsCheckCircle color='#6bc10e' size='20px' /> : <BsClock color='#ffb600' size='20px' />}
        </Tooltip.Trigger>
        <Tooltip.Content
          style={{
            background: '#fff',
            border: '1px solid black',
            borderRadius: '4px',
            padding: '8px 12px',
            margin: '0 0 12px 0',
            fontSize: '14px',
            position: 'relative',
          }}
        >
          {finalized ? 'Finalized' : 'Unfinalized'}

          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '0px',
              }}
            >
              <Arrow width='14px' height='21px' fill='#fff' strokeColor='#302b3c' />
            </div>
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default ToolTip
