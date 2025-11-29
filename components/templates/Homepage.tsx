import React from 'react'
import { MainLayout } from './MainLayout'
import { HeroSection } from '../organisms'

type Props = {}

export default function Homepage({}: Props) {
  return (
      <>
          <MainLayout>
              <HeroSection />
          </MainLayout>
      </>
  )
}