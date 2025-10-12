import Image from 'next/image'

export function Logo({ src, alt, className, ...props }) {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={40} 
      height={40} 
      className={className}
      {...props} 
    />
  );
}
