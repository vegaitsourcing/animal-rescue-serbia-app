﻿using System.ComponentModel.DataAnnotations;

namespace AnimalRescue.Contracts.Dto;

public class ViolationCategoryUpdateDto
{
    [Required(AllowEmptyStrings = false)]
    public string Name { get; set; }

    public bool IsEnabled { get; set; }
}