import React from 'react'

const ServicesItems = () => {
  return (
    <div className='margin-y py-5'>
        <h1 className='fs_40 fontApp mb-5'>-some services:-</h1>
        <div className="d-flex align-items-center text-center justify-content-around gap-2 flex-wrap">
            <div className='p-5 rounded border border-light-subtle'>
                <img width={50} src="IMG/icon/icons8-delivery.gif" alt="" />
                <p className='fw-bold fs_20'>Free Shipping</p>
                <span className='fs_16 c-gray'>Order above $200</span>
            </div>
            <div className='p-5 rounded border border-light-subtle'>
                <img width={50} src="IMG/icon/icons8-card-exchange.gif" alt="" />
                <p className='fw-bold fs_20'>Money-back</p>
                <span className='fs_16 c-gray'>30 days guarantee</span>
            </div>
            <div className='p-5 rounded border border-light-subtle'>
                <img width={50} src="IMG/icon/icons8-lock.gif" alt="" />
                <p className='fw-bold fs_20'>Secure Payments</p>
                <span className='fs_16 c-gray'>Secured by Stripe</span>
            </div>
            <div className='p-5 rounded border border-light-subtle'>
                <img width={50} src="IMG/icon/icons8-online-support.gif" alt="" />
                <p className='fw-bold fs_20'>24/7 Support</p>
                <span className='fs_16 c-gray'>Phone and Email support</span>
            </div>
        </div>
    </div>
  )
}

export default ServicesItems