package example.day10._멀티스레드;

import java.util.Scanner;

class Music extends Thread{
    boolean state1 = false;
    @Override
    public void run() {
        try{
            while (state1){
                System.out.println( "음악 재생중...");
                Thread.sleep( 1000 );
            }
        }catch ( Exception e ) { System.out.println( e ); }
    }
}
class Web extends Thread{
    boolean state2 = false;
    @Override
    public void run() {
        try{
            while (state2){
                System.out.println( "웹서핑 중...");
                Thread.sleep( 1000 );
            }
        }catch ( Exception e ) { System.out.println( e ); }
    }
}

public class task {
    public static void main(String[] args) {
        Music music = new Music();
        Web web = new Web();
        boolean multi = true;
        while (multi){
            Scanner scan = new Scanner( System.in );
            System.out.println("1. 음악 On/Off | 2. 웹서핑 On/Off | 0. 종료");
            int i = scan.nextInt();

            if (i == 1) {
                System.out.println("음악 시작!");
                music.state1 = true;
                music.start();
            }else if (i == 2) {
                System.out.println("웹서핑 시작!");
                web.state2 = true;
                web.start();
            }else{
                multi = false;
                System.out.println("종료합니다.");
                music.state1 = false;
                web.state2 = false;
            }
        }
    }

}
