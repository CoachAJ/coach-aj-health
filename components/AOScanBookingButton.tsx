'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

interface AOScanBookingButtonProps {
  className?: string
}

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: {
          url: string
          color: string
          label: string
          target: HTMLElement
        }) => void
      }
    }
  }
}

export default function AOScanBookingButton({ className = '' }: AOScanBookingButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonInitialized = useRef(false)

  useEffect(() => {
    const initButton = () => {
      if (containerRef.current && window.calendar && !buttonInitialized.current) {
        buttonInitialized.current = true
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ08FMPdQTxSMi4hAp_EPxsfnCcnLNQVyuFB7ow7y9SjDm8geJyUXJOLHJ5FuwzN2Qgl7gC0zxH_?gv=true',
          color: '#039BE5',
          label: 'Book an appointment',
          target: containerRef.current,
        })
      }
    }

    // Try to init immediately if script is already loaded
    initButton()

    // Also listen for script load
    window.addEventListener('load', initButton)
    return () => window.removeEventListener('load', initButton)
  }, [])

  return (
    <div className={className}>
      <link 
        href="https://calendar.google.com/calendar/scheduling-button-script.css" 
        rel="stylesheet" 
      />
      <Script 
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        onLoad={() => {
          if (containerRef.current && window.calendar && !buttonInitialized.current) {
            buttonInitialized.current = true
            window.calendar.schedulingButton.load({
              url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ08FMPdQTxSMi4hAp_EPxsfnCcnLNQVyuFB7ow7y9SjDm8geJyUXJOLHJ5FuwzN2Qgl7gC0zxH_?gv=true',
              color: '#039BE5',
              label: 'Book an appointment',
              target: containerRef.current,
            })
          }
        }}
      />
      <div ref={containerRef} />
    </div>
  )
}
