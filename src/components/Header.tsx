import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <header className="w-full px-40">
      <div className="max-w-[1120px] m-auto flex flex-row justify-between items-center py-8 gap-4">
        <img src={logoImg} alt="" />

        <div className="flex flex-row gap-3">
          <span className="flex flex-row items-center gap-1 p-2 bg-purple-100 rounded-md text-purple-700 text-sm">
            <MapPin weight="fill" size={22} className="fill-purple-500" />
            Porto Alegre, RS
          </span>
          <a href="#" className="p-2 bg-yellow-100 rounded-md">
            <ShoppingCart weight="fill" size={22} className="fill-yellow-700" />
          </a>
        </div>
      </div>
    </header>
  )
}
