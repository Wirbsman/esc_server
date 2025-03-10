package de.esc.server.data;

import jakarta.persistence.*;


@Entity
@Table(name = "Country")
public class Country {
    @Id
    @GeneratedValue(generator = "id")
    private Long id;

    private String name;

    private String flag;

    private String songname;

    private String interpret;

    private Integer index;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public String getSongname() {
        return songname;
    }

    public void setSongname(String songname) {
        this.songname = songname;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public String getInterpret() {
        return interpret;
    }
    public void setInterpret(String interpret) {
        this.interpret = interpret;
    }
}
