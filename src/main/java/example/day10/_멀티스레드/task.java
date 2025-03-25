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
        while (multi) {
            Scanner scan = new Scanner(System.in);
            System.out.println("1. 음악 On/Off | 2. 웹서핑 On/Off | 0. 종료");
            int i = scan.nextInt();
            if (i == 1) {
                if (music.state1 == false) {
                    System.out.println("음악 시작!");
                    music.start();
                    music.state1 = true;
                } else if (music.state1 == true) {
                    System.out.println("음악 종료!");
                    music.state1 = false;
                }
            } else if (i == 2) {
                    if (web.state2 == false) {
                        System.out.println("웹서핑 시작!");
                        web.start();
                        web.state2 = true;
                    } else if (web.state2 == true) {
                        System.out.println("웹서핑 종료!");
                        web.state2 = false;
                    }
                } else if (i == 0) {
                    System.out.println("프로그램 종료!");
                    music.state1 = false;
                    web.state2 = false;
                    multi = false;
                }
            }
        }
    }