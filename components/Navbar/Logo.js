export default function Logo() {
  return (
    <div className="flex uppercase text-lg items-center justify-center font-semibold tracking-widest">
      <img
        className="h-16 items-center mr-3"
        src="/logo_getor.png"
        alt="logo getor"
      />
      <div className="text-center font-semibold hidden lg:block">
        <p>GEREJA TORAJA</p>
        <p>JEMAAT DEPOK</p>
      </div>
    </div>
  );
}
