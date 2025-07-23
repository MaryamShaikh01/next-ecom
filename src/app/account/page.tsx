'use client'
import AccountBreadcrumb from '@/components/Account/AccountBreadCrumb'
import UserIcon from '@/components/svg/UserIcon'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WishList from '@/components/Account/WishList'
import Orders from '@/components/Account/Orders'
import AccountDetails from '@/components/Account/AccountDetails'
import LoggedUserTabData from '@/components/Account/LoggedUserTabData'

const Account = () => {



  return (
    <>
      <AccountBreadcrumb />
      <LoggedUserTabData />
    </>
  )
}

export default Account