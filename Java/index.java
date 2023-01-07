public  class index {

    public static void main(String[] args) {
        Queues myQueue = new Queues(4);
        myQueue.insert(10);
        myQueue.insert(5);
        myQueue.insert(2);
        myQueue.insert(3);
        System.out.println(myQueue.isFull());
        myQueue.remove();

        myQueue.insert(7);
        System.out.println(myQueue.peekFront());
        System.out.println(myQueue.peekRear());
        System.out.println(myQueue.toString());


    }




}