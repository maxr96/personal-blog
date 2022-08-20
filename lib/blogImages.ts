import { StaticImageData } from 'next/future/image';
import dynamicRouting from '../public/assets/blog/dynamic-routing/cover.jpg'
import helloWorld from '../public/assets/blog/hello-world/cover.jpg'
import preview from '../public/assets/blog/preview/cover.jpg'

const blogImages: {[key: string]: StaticImageData} = {dynamicRouting, helloWorld, preview}

export default blogImages;