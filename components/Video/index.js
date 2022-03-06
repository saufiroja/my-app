import React, { useRef, useState, useEffect } from "react"
import { ControlBar, Player } from "video-react"

const sources = {
    suwitGame: "https://www.youtube.com/watch?v=M8rbVzVf_z0",
    subwaySurf: "https://www.youtube.com/watch?v=ZtHCnXMjIXY",
    superMario: "https://www.youtube.com/watch?v=CyJe97NRpjk"
}

export default function Video() {
    const [source, setSource] = useState(sources.bunnyMovie)
    const [_player, _setPlayer] = useState()

    const player = useRef()

    useEffect(() => {
        player.current.subscribeToStateChange(handleStateChange)
    }, [])

    const setMuted = (muted) => {
        return () => {
            player.current.muted = muted
        }
    }

    const handleStateChange = (state) => {
        _setPlayer(state)
    }
    
    const changeCurrentTime = (seconds) => {
        return () => {
            const data = player.current.getState()
            player.current.seek(data.player.currentTime + seconds)
        }
    }

    const changePlaybackRateRate = (steps) => {
        return () => {
            const data = player.current.getState()
            player.current.playbackRate = data.player.playbackRate + steps
        }
    }

    const changeVolume = (steps) => {
        return () => {
            const data = player.current.getState()
            player.current.volume = data.player.volume + steps
        }
    }

    const changeSource = (name) => {
        return () => {
            setSource(sources[name])
            player.current.load()
        }
    }

    return (
        <div>
            <Player autoPlay ref={player}>
                <source src={source} />
                <ControlBar autoHide={false} />
            </Player>

            <div className="pb-3">
                <button onClick={changePlaybackRateRate(1)} className="mr-3">Playback Rate ++</button>
                <button onClick={changePlaybackRateRate(-1)} className="mr-3">Playback Rate --</button>
                <button onClick={changePlaybackRateRate(0.1)} className="mr-3">Playback Rate + 0.1</button>
                <button onClick={changePlaybackRateRate(-0.1)} className="mr-3">Playback Rate - 0.1</button>
            </div>

            <div className="pb-3">
                <button onClick={changeVolume(0.1)} className="mr-3">Volume + 0.1</button>
                <button onClick={changeVolume(-0.1)} className="mr-3">Volume - 0.1</button>
                <button onClick={setMuted(true)} className="mr-3">Muted</button>
                <button onClick={setMuted(false)} className="mr-3">Un-muted</button>

                <div className="pb-3">
                <button onClick={changeSource("suwitGame")} className="mr-3 bg-primary text-white">Suwit Game</button>
                <button onClick={changeSource("subwaySurf")} className="mr-3 bg-primary text-white">Subway Surf</button>
                <button onClick={changeSource("superMario")} className="mr-3 bg-primary text-white">Super Mario</button>
            </div>
            </div>
        </div>
    )
}
