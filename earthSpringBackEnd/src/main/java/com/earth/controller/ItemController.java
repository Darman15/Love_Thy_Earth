package com.earth.controller;

import com.earth.entity.Item;
import com.earth.entity.Stock;
import com.earth.entity.User;
import com.earth.repository.ItemRepository;
import com.earth.repository.StockRepository;
import com.earth.repository.UserRepository;
import com.earth.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private  ItemService itemService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StockRepository stockRepository;

//    Start of save/add/post an Item logic
//    -----------------
    @RequestMapping(value = "/saveItem",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.POST)
    public void submitItemDetails(@RequestBody Item item) {
        itemRepository.save(item);
    }


//Start of save item for stock
    @RequestMapping(value = "/saveItem/{userId}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.POST)
    public void submitItemDetailsForStock(@RequestBody Item item, @PathVariable("userId") int userId) {
       Item newlyCreatedItem =  itemRepository.save(item);
       User user = userRepository.findById(userId).get();
        Stock stock = new Stock();
        stock.setUserId(user);
        stock.setItemId(item);
        stockRepository.save(stock);

    }





//    end of add/Post Item

//    Start of get all possible Items
    @RequestMapping(value = "/getAllItems",
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> allItems = itemService.listAllItems();
        return new ResponseEntity<>(allItems, HttpStatus.OK);
    }
//    -----------------------
//    End of get all Items logic

//    Start of get Item By Id
    @RequestMapping(value = "/getItemById",
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Optional<Item>> findItemById(int id) {
        return new ResponseEntity<>(itemRepository.findById(id), HttpStatus.OK);
    }
//    -----------------
//    end of get Item by Id


//    Start of Delete Item
    @RequestMapping(value = "/deleteItem",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity<Optional<Item>> deleteItemById(int id) {
        itemRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
//    ------------------------
//    End of delete Item by ID

//    Should not need an update Item but know it is not there for now!


}
