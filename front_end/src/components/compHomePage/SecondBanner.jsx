import React, { useRef } from 'react'
import './secondBanner.css'
const SecondBanner = () => {
    const video = useRef()
    const videoPlayerIcon = useRef()
    const section = useRef()
    const playVideo = ()=>{
        if(video.current.paused) {
            video.current.play()
            videoPlayerIcon.current.src="/IMG/icon/icons8-pause-64.png"
            section.current.classList.remove('overlay')
        }else {
            video.current.pause()
            videoPlayerIcon.current.src="/IMG/icon/icons8-play-64.png"
            section.current.classList.add('overlay')
        
        }
    }
  return (
    <div className='position-relative margin-y overlay' ref={section} style={{width:"100%"}}>
        <button onClick={playVideo} className='btn-play'><img ref={videoPlayerIcon} src="/IMG/icon/icons8-play-64.png" alt="" /></button>
        <video ref={video} width={"100%"}>
            <source src='/IMG/video.mp4' type='video/mp4'/>
        </video>
        <div style={{zIndex:"2",position:"relative",textAlign:"center",backgroundColor:"rgb(35 35 35)"}}>
            <p className='fs_40 c-white fontApp mb-0'>Winter Collections</p>
            <span className='fs_20 c-grey'>Introducing the new winter jackets.</span>
        </div>
    </div>
  )
}

export default SecondBanner