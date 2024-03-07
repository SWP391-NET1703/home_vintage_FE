import CartColumnframe48095972 from 'components/CartColumnframe48095972'
import CartNavbar from 'components/CartNavbar'
import CartSectionfooter from 'components/CartSectionfooter'
import React from 'react'

const StaffPage = () => {
    return (
        <div>
            <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
                <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
            </div>

            <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
                <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1290px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
            </div>
            <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
        </div>

    )
}

export default StaffPage
