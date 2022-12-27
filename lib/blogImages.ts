import { StaticImageData } from 'next/future/image';
import personalProjectTips from '../public/assets/blog/personal-project-tipps/cover.jpg'
import migratingNextToAstro from '../public/assets/blog/migrating-next-to-astro/cover.webp'

const blogImages: {[key: string]: StaticImageData} = {personalProjectTips, migratingNextToAstro}

export default blogImages;