export function Logo({ src, alt, ...props }) {
  return (
    <img src={src} alt={alt} {...props} />
  );
}
