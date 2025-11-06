import Image from "next/image"

export default function Slide3() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg max-w-sm sm:max-w-2xl mx-auto">
      <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">TATOUAGE PERMANENT</h2>
      <p className="text-gray-700 text-sm sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
        Le pigment est injecté dans le derme (plus profond), ce qui le rend définitif.
      </p>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 sm:mb-8 max-w-2xl mx-auto rounded-r-lg">
        <h3 className="text-red-800 font-bold mb-2 text-base sm:text-lg">
          Différence fondamentale avec le microblading :
        </h3>
        <p className="text-red-700 text-sm sm:text-base leading-relaxed">
          Le microblading n’est pas un tatouage permanent : l’aiguille ne doit pas pénétrer profondément dans la peau et la cliente ne doit en aucun cas saigner. Si un saignement survient, cela peut indiquer une carence en vitamines, notamment en vitamine K (coagulation) et vitamine C (fragilité capillaire). Il est donc important d’en informer et de prévenir la cliente avant la séance.
        </p>
      </div>

      <div className="mt-4 sm:mt-6 flex justify-center">
        <Image
          src="/images/permanent-tattoo-diagram.png"
          alt="Diagramme du tatouage permanent montrant l'injection profonde dans le derme"
          width={320}
          height={256}
          className="sm:w-[400px] sm:h-[320px] rounded-lg object-contain"
        />
      </div>
    </div>
  )
}
