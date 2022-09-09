import { BsClock, BsCheckCircle } from 'react-icons/bs'
import * as Tooltip from '@radix-ui/react-tooltip'
import Arrow from '../../Shared/Arrow'

const ToolTip = () => {
  const isPending = true

  return (
    <Tooltip.Provider delayDuration='100'>
      <Tooltip.Root>
        <Tooltip.Trigger style={{ borderRadius: '50%', padding: 0, border: 'none', background: '#fff' }}>
          {isPending ? <BsClock color='#ffb600' size='20px' /> : <BsCheckCircle color='#6bc10e' size='20px' />}
        </Tooltip.Trigger>
        <Tooltip.Content
          style={{
            border: '1px solid black',
            borderRadius: '4px',
            padding: '8px 12px',
            margin: '0 0 12px 0',
            fontSize: '12px',
            position: 'relative',
          }}
        >
          {isPending ? 'Unfinalized' : 'Finalized'}

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
              <Arrow width='14px' height='21px' fill='#fff' strokeColor='#000' />
            </div>
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default ToolTip
