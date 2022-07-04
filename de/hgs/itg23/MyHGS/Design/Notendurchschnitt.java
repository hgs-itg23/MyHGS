package Design;

/**
 * @author Michael
 * Ein Rechner der alle Eingegebenen Noten nimmt und den Mittelwert ausrechnet
 */

public class Notendurchschnitt {

    public static double schnitt (double [] noten){
        double summe = 0;
        int anzahl = noten.length;

        for(int i = 0; i < noten.length; i++){
            summe = summe + noten [i];
        }

        double schnitt = summe / anzahl;

        return schnitt;
    }

    public static void main (String [] args){
        double [] meineN = {4,3,3,1,2,2};

        System.out.println(schnitt(meineN));
    }
   
 }
