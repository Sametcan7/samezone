export default function Loading() {
  return (
    <div className="mt-4 animate-pulse">
      <div>
        <p className="inline-block rounded-xl bg-slate-500 px-44 py-4"></p>
      </div>
      <div className="my-8 flex h-auto gap-4 max-md:flex-col">
        <Category />
        <div className="mx-4 grid w-full auto-rows-max grid-cols-[repeat(2,_minmax(0,_320px))] gap-2 lg:grid-cols-[repeat(3,_minmax(0,_320px))] xl:grid-cols-[repeat(4,_minmax(0,_320px))]">
          {Array(8)
            .fill(null)
            .map((d, i) => (
              <Card key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}

function Category() {
  return (
    <div className="h-fit rounded-lg bg-secondary-color md:sticky md:top-[20px]">
      <div className="w-full rounded-lg border-2 border-black text-middle-color md:w-[250px]">
        <div className="border-b-2 border-black py-3">
          <div className="my-2">
            <p className="mx-2 rounded-xl bg-slate-500 py-2.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
          </div>
        </div>
        <div className="border-b-2 border-black py-3">
          <div className="my-2">
            <p className="mx-2 rounded-xl bg-slate-500 py-2.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
          </div>
        </div>
        <div className="border-b-2 border-black py-3">
          <div className="my-2">
            <p className="mx-2 rounded-xl bg-slate-500 py-2.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
          </div>
        </div>
        <div className="border-black py-3">
          <div className="my-2">
            <p className="mx-2 rounded-xl bg-slate-500 py-2.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
            <p className="mx-2 mt-2 rounded-xl bg-slate-500 py-1.5"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="rounded-lg bg-secondary-color p-2 text-text-color">
      <div className="mb-2 aspect-square w-full rounded-lg bg-slate-500"></div>
      <div>
        <p className="mt-2 rounded-xl bg-slate-500 py-2"></p>
        <p className="mt-2 rounded-xl bg-slate-500 py-2"></p>
        <p className="mt-2 rounded-xl bg-slate-500 py-2"></p>
      </div>
    </div>
  );
}
