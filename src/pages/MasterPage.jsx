import { Body } from "../layout/Body"
import { Aside } from "../layout/Aside" 
import {Footer } from "../layout/Footer"
export default function MasterPage() {
  return (
    <div>
      <Aside/>
      <Body/>
      <Footer/>
    </div>
  )
}
