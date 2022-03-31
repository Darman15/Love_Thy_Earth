package com.earth.entity;

import javax.persistence.*;

@Entity

@Table(name = "stock")
public class Stock {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

//    one user can have many stocks
    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User userId;


    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "item_id" )
    private Item itemId;

    @Column(name = "quantity")
    private int quantity;

    public Stock(int id, User userId, Item itemId, int quantity) {
        this.id = id;
        this.userId = userId;
        this.itemId = itemId;
        this.quantity = quantity;
    }

    public Stock() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public Item getItemId() {
        return itemId;
    }

    public void setItemId(Item itemId) {
        this.itemId = itemId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
