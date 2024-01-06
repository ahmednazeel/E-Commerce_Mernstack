import { Avatar } from '@mui/material'
import React from 'react'

const Avatars = () => {
  return (
    <div>
        <h1 className="c-first fontApp mb-5 fs_40 text-center">-Shop by Categories:-</h1>
        <div className='d-flex align-items-center justify-content-center flex-wrap gap-2'>
            <div>
              <Avatar
                  alt=""
                  src="/IMG/product(3).png"
                  sx={{ width: 167, height: 167 }}
              />
              <p className='text-center fs_14 fw-bold c-first'>Puffers</p>
            </div>
            <div>
              <Avatar
                  alt=""
                  src="/IMG/product(5).png"
                  sx={{ width: 167, height: 167 }}
              />
              <p className='text-center fs_14 fw-bold c-first'>Bombers</p>
            </div>
            <div>
              <Avatar
                  alt=""
                  src="/IMG/product(6).png"
                  sx={{ width: 167, height: 167 }}
              />
              <p className='text-center fs_14 fw-bold c-first'>Lightweight jackets</p>
            </div>
            <div>
              <Avatar
                  alt=""
                  src="/IMG/product(7).png"
                  sx={{ width: 167, height: 167 }}
              />
              <p className='text-center fs_14 fw-bold c-first'>Gilets</p>
            </div>
            <div>
              <Avatar
                  alt=""
                  src="/IMG/product(8).png"
                  sx={{ width: 167, height: 167 }}
              />
              <p className='text-center fs_14 fw-bold c-first'>Coats</p>
            </div>
            <div>
              <Avatar
                  alt=""
                  src="/IMG/product(9).png"
                  sx={{ width: 167, height: 167 }}
              />
              <p className='text-center fs_14 fw-bold c-first'>Rainwear</p>
            </div>
        </div>
    </div>
  )
}

export default Avatars
