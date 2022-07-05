class AutoPause{

   constructor() //Metodo constructor
   {
      this.threshold = 0.25;
      this.handleIntersection = this.handleIntersection.bind(this);
      this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
   }

   run(player){ //a ejecutar los plugins
      this.player = player;

      const observer = new IntersectionObserver(this.handleIntersection, {
         threshold: this.threshold
      })

      observer.observe(this.player.media);

      document.addEventListener('visibilitychange', this.handleVisibilityChange);
   }

   handleVisibilityChange(){
      const isVisible = document.visibilityState === "visible";
      if(isVisible){
         this.player.play();
         console.log("play");
      }
      else{
         this.player.pause();
         console.log("pause");
      }
   }

   handleIntersection(entries){ //Funcion a realizar cuando se detecta una interseccion
      const entry    = entries[0];
      console.log(entry);

      const isVisible = entry.intersectionRatio >= this.threshold

      if(isVisible){
         this.player.play();
      } else {
         this.player.pause();
      }
      
   }
}

export default AutoPause;