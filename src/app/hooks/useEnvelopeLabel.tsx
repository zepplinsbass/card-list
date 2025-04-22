import { useState } from 'react'

interface SenderAddress {
  Name: string
  Address1: string
  Address2: string
  City: string
  State: string
  ZipCode: string
}

interface LabelSize {
  width: number
  height: number
}

const defaultSender = {
  Name: '',
  Address1: '',
  Address2: '',
  City: '',
  State: '',
  ZipCode: '',
}

export const useEnvelopeLabel = () => {
  const [senderAddress, setSenderAddress] = useState<SenderAddress>(defaultSender)
  const [labelSize, setLabelSize] = useState<LabelSize>({
    width: 600,
    height: 400,
  })

  const handleSenderAddressChange = (key: keyof SenderAddress, value: string) => {
    setSenderAddress({
      ...senderAddress,
      [key]: value,
    })
  }

  const handleLabelSizeChange = (key: keyof LabelSize, value: number) => {
    setLabelSize({
      ...labelSize,
      [key]: value,
    })
  }

  return {
    senderAddress,
    handleSenderAddressChange,
    labelSize,
    handleLabelSizeChange,
  }
}
