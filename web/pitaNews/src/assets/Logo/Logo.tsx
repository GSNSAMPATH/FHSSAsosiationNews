import pitaLogo from '../Logo/pitaLogo.png'

const PitaLogo = (props: React.ComponentProps<'img'>) => {
    return (
        <img src={pitaLogo} style={{ ...props.style }} {...props} />
    )
}

import univercityLogo from '../Logo/SjpLogo.png'

const UnivercityLogo = (props: React.ComponentProps<'img'>) => {
    return (
        <img src={univercityLogo} style={{  ...props.style }} {...props} />
    )
}

export { PitaLogo, UnivercityLogo }

