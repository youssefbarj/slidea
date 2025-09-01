import Image from "next/image"

export default function Slide2() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg max-w-sm sm:max-w-2xl mx-auto">
      <h2 className="text-lg sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">
        MAQUILLAGE SEMI-PERMANENT (DERMOGRAPHE)
      </h2>
      <p className="text-gray-700 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
        Le pigment est inséré à 0,5 à 0,8 mm de profondeur à l'aide d'un appareil électrique, pour une tenue de 2 à 5
        ans.
      </p>
      <div className="mt-4 sm:mt-6 flex justify-center">
        <Image
          src="/images/semi-permanent-diagram.png"
          alt="Diagramme du maquillage semi-permanent montrant la profondeur intermédiaire de 0,5 à 0,8 mm"
          width={320}
          height={256}
          className="sm:w-[400px] sm:h-[320px] rounded-lg object-contain"
        />
      </div>
    </div>
  )
}
