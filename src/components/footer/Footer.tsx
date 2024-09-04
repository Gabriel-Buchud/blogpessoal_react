import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import AuthContext from '../../contexts/AuthContext'
import { ReactNode, useContext } from 'react'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode;

    if (usuario.token !== "") {

        component = (
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="flex flex-col items-center py-4 container">
                    <p className='font-bold text-xl'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="" target="_blank">
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                        <a href="" target="_blank">
                            <FacebookLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Footer