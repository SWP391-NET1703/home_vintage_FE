import { Text } from 'components'
import CartColumnframe48095972 from 'components/CartColumnframe48095972'
import CartNavbar from 'components/CartNavbar'
import CartSectionfooter from 'components/CartSectionfooter'
import React from 'react'
import { useQuery } from 'react-query'
import { history } from 'services/order/history'
import { last } from 'lodash'
const OrderPage = () => {
    const { data } = useQuery({ queryKey: ['order'], queryFn: history })


    return (
        <div>
            <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
                <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />

                <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                    size="txtRalewayBold40">
                    Theo dõi trạng thái đơn hàng của bạn
                </Text>
                {data && <Text size='txtPoppinsSemiBold20'>
                    Trạng thái: {last(data?.list_order_history).status_payment}
                </Text>}


                <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
                    <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1290px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
                </div>
                <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
            </div>
        </div>
    )
}

export default OrderPage
